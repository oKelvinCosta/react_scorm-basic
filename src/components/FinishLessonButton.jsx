import * as scormApp from "../assets/scorm/scorm-app.js";

export default function FinishLessonButton() {
  return (
    <>
      <button onClick={() => scormApp.finishTopic()}>Finish</button>
    </>
  );
}
