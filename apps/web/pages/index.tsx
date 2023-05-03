import { SourceCodeEditor } from "@editor/SourceCodeEditor";
import { fetchCode } from "@services/api";
import { Button } from "ui";

export default function Web() {

  const onRun = async () => {
    console.log('onRun-->');
    const res = await fetchCode()
    console.log('res', res)
    const data = await res.json();
    console.log('res-data', data)
  }

  return (
    <div>
      <h1>Web</h1>
      <Button />
      <button onClick={onRun}>run</button>
      <div>
        <SourceCodeEditor />
      </div>
    </div>
  );
}
