import * as scormApp from "../assets/scorm/SCOApp.js";

export default function FinishLessonButton() {
  return (
    <>
      <button onClick={() => scormApp.finishTopic()}>Finish</button>
    </>
  );
}
