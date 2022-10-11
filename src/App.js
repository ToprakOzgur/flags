import "./App.scss";
import "./styles/themes/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkMode/darkModeContext";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { Home, Details, Error } from "./pages";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
