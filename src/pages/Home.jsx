import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import "../App.css";
import FinishLessonButton from "../components/FinishLessonButton";

export default function Home() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>SCORM Integration with React</h1>

      <p>Click here to conclude the lesson:</p>
      {/* Button with processing done entirely in the scorm-app.js file */}
      {/* <button id="finishButton">Finish</button> */}

      {/* Button with modular treatment, calling parts of the code in functions from the scorm-app.js file: */}
      <FinishLessonButton />
    </>
  );
}
