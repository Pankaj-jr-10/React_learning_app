
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
     <BrowserRouter>
      <Navbar title="React Tutorials" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
        <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze"
              mode={mode}
            />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
