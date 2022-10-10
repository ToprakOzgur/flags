import "./App.scss";
import "./styles/themes/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkMode/darkModeContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Details from "./pages/Details/Details";
import Error from "./pages/Error/Error";

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
