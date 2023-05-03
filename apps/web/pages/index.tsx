import { SourceCodeEditor } from "@editor/SourceCodeEditor";
import { fetchCode, getRunningContainerApi, getContainerStatusApi, runCodeApi } from "@services/api";
import { Button } from "ui";

export default function Web() {

  // const onRun = async () => {
  //   console.log('onRun-->');
  //   const res = await fetchCode()
  //   console.log('res', res)
  //   const data = await res.json();
  //   console.log('res-data', data)
  // }

  const onRunJs = async () => {
    console.log('onRun-->');
    const res = await runCodeApi()
    console.log('res', res)
    const data = await res.json();
    console.log('onRunJs', data)
  }

  const onGetContainerStatus = async () => {
    console.log('onRun-->');
    const res = await getContainerStatusApi()
    const data = await res.json();
    console.log('getRunningContainerApi', data)
  }

  const onGetRunningContainer = async () => {
    console.log('onRun-->');
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
        <button onClick={onRunJs}>run js</button>
      </div>

      <div>
        <button onClick={onGetContainerStatus}>get Container Status</button>
      </div>

      <div>
        <button onClick={onGetRunningContainer}>get Running Container</button>
      </div>

      <div>
        <SourceCodeEditor />
      </div>
    </div>
  );
}
