import "./App.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import About from "./pages/About";

const myRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

function App() {
  return (
    <>
      <HashRouter>
        <Navigation></Navigation>

        <Routes>
          {myRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
