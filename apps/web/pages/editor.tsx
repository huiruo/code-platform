import { SourceCodeEditor } from "@editor/SourceCodeEditor";
import { fetchCode, getRunningContainerApi, getContainerStatusApi, runCodeApi, stopContainerApi, startContainerApi, buildImageApi } from "@services/api";
import { useRef } from "react";
import { Button } from "ui";
import Layout from "@components/layout";

export default function Web() {
  const editorRef: any = useRef(null);

  // const onRun = async () => {
  //   console.log('onRun-->');
  //   const res = await fetchCode()
  //   console.log('res', res)
  //   const data = await res.json();
  //   console.log('res-data', data)
  // }

  const onRunJs = async () => {
    console.log('onRunJs-->');

    if (editorRef.current) {
      editorRef.current.runCode();
    }
  }

  const onGetContainerStatus = async () => {
    const containerName = '1874f672f0a7'
    // const containerName = '173063551e6f' // nginx
    const res = await getContainerStatusApi({ containerName })
    const data = await res.json();
    console.log('getRunningContainerApi', data)
  }

  const onGetRunningContainer = async () => {
    const res = await getRunningContainerApi()
    const data = await res.json();
    console.log('getRunningContainerApi', data)
  }

  const onStopContainer = async () => {
    // const containerName = '1874f672f0a7'
    const containerName = '173063551e6f' // nginx
    const res = await stopContainerApi({ containerName })
    const data = await res.json();
    console.log('onStopContainer', data)
  }

  const onStartContainer = async () => {
    const containerName = '1874f672f0a7' // exited
    // const containerName = '173063551e6f' // nginx
    const res = await startContainerApi({ containerName })
    const data = await res.json();
    console.log('onStopContainer', data)
  }

  const onBuildImage = async () => {
    const params = {
      dockerfileName: 'node.client',
      imageName: 'node-client'
    }
    const res = await buildImageApi(params)
    const data = await res.json();
    console.log('onStopContainer', data)
  }

  return (
      <Layout>
          <div>
              <h1>Web</h1>
              {/* <Button /> */}
              {/* <div>
        <button onClick={onRun}>run</button>
      </div> */}

              <div>
                  <button onClick={onGetContainerStatus}>get Container Status</button>
              </div>

              <div>
                  <button onClick={onGetRunningContainer}>get Running Container</button>
              </div>

              <div>
                  <button onClick={onStopContainer}>stop Container</button>
              </div>

              <div>
                  <button onClick={onRunJs}>run js</button>
              </div>

              <div>
                  <button onClick={onStartContainer}>Start Container</button>
              </div>

              <div>
                  <button onClick={onBuildImage}>build Image</button>
              </div>

              <SourceCodeEditor ref={editorRef} />
          </div>
      </Layout>
  );
}
