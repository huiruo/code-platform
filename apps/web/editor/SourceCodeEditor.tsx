import React, { useState, useRef } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import Editor from '@monaco-editor/react'
import type monaco from 'monaco-editor'

type Props = {
  lang?: string
}

const langMap: Record<any, string> = {
  py: 'python',
  ts: 'typescript',
  js: 'javascript',
  go: 'go',
}

const test = `console.log('hello world')`

export const SourceCodeEditor = ({ }: Props) => {
  const [value, setValue] = useState<string>(test || '')
  const lang = 'typescript'
  const ref = useRef<HTMLDivElement>(null)
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>()

  const saveCode = useDebouncedCallback(async (code: string) => {
    // const langMap: Record<string, StrategyLang> = {
    //   python: StrategyLang.Py,
    //   typescript: StrategyLang.Ts,
    //   javascript: StrategyLang.Js,
    //   go: StrategyLang.Go,
    // }
    // const input: ModifyStrategyInput = {
    //   id: strategy.id,
    //   // lang: langMap[lang],
    // }

    // if (langMap[lang]) {
    //   input[langMap[lang]] = code
    // }

    try {
      console.log('Saved')
    } catch (error) {
      console.log('Save fail')
    }
  }, 1000)

  return (
    <div style={{ height: 'calc(100vh - 200px)' }}>
      <Editor
        options={{
          // scrollBeyondLastLine: false,
          wordWrap: 'on',
          padding: {
            top: 10,
          },
          wrappingStrategy: 'advanced',
          minimap: {
            enabled: false,
          },
          overviewRulerLanes: 0,
        }}
        defaultLanguage={lang || 'typescript'}
        // style={{
        //   border: 1,
        //   height: 'calc(100vh - 20px)',
        // }}
        value={value}
        theme="vs-dark"
        onChange={(v) => {
          setValue(v!)
          saveCode(v!)
        }}
        beforeMount={(monaco) => {
          // extra libraries

          const libSource = `
            declare module "boter-core" {
              export type ParamsSchema = any
              export type Candle = any
              export type Ticker = any

              export declare type Period = '1m' | '3m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '6h' | '8h' | '12h' | '1d' | '3d' | '1w' | '1M';

              export declare function onCandle(period: Period | (string & {})): MethodDecorator;

              export declare function onInit(): MethodDecorator;

              export class BaseStrategy<T> {
                botId: number
                sleep: (ms: number) => Promise<void>,
                logger: {
                  debug(message?: any, ...optionalParams: any[]): void
                  info(message?: any, ...optionalParams: any[]): void 
                  warn(message?: any, ...optionalParams: any[]): void 
                  error(message?: any, ...optionalParams: any[]): void 
                }
                orderService: any
                params: T
                exchange: any
                okx: any
                binance: any
                binanceWebsocket: any
              }

            }
          `

          monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: false,
          })

          monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
            // allowJs: true,
            // checkJs: true,
            target: monaco.languages.typescript.ScriptTarget.ES2015,
            allowNonTsExtensions: true,
          })

          monaco.languages.typescript.typescriptDefaults.addExtraLib(libSource)
          monaco.editor.createModel(libSource, 'typescript')
        }}
        onMount={(editor, monaco) => {
          editorRef.current = editor
          // editor.updateOptions({})

          if (!ref.current || !editorRef.current) return

          const container = ref.current

          const updateHeight = () => {
            const contentHeight = Math.min(800, editor.getContentHeight())
            // const contentHeight = editor.getContentHeight()
            container.style.width = '100%'
            const h = contentHeight < 300 ? 300 : contentHeight
            container.style.height = h > 300 ? '300px' : `${h}px`
            const { width } = container.getBoundingClientRect()
            editor.layout({ width, height: contentHeight })
          }

          editorRef.current.onDidContentSizeChange(updateHeight)
          updateHeight()
        }}
      />
    </div>
  )
}
