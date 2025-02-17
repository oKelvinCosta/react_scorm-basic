import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FinishLessonButton from "./components/FinishLessonButton";

function App() {
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
      {/* Botão com tratamento inteiramente feito no arquivo scorm-app.js */}
      {/* <button id="finishButton">Finish</button> */}

      {/* Botão com tratamento modular, chamando partes do código em funçõesdo arquivo scorm-app.js: */}
      <FinishLessonButton />
    </>
  );
}

export default App;
