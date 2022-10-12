import "./App.scss";
import "./styles/themes/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkMode/darkModeContext";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./components";
import { Home, Details, Error } from "./pages";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
