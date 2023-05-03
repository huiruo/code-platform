import { SourceCodeEditor } from "@editor/SourceCodeEditor";
import { fetchCode, getRunningContainerApi, getContainerStatusApi, runCodeApi } from "@services/api";
import { useRef } from "react";
import { Button } from "ui";

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
    // const containerName = '1874f672f0a7-aa'
    const res = await getContainerStatusApi({ containerName })
    const data = await res.json();
    console.log('getRunningContainerApi', data)
  }

  const onGetRunningContainer = async () => {
    const res = await getRunningContainerApi()
    const data = await res.json();
    console.log('getRunningContainerApi', data)
  }

  return (
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
        <button onClick={onRunJs}>run js</button>
      </div>

      <SourceCodeEditor ref={editorRef} />
    </div>
  );
}
