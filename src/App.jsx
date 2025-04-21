import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Fileupload from "./components/fileupload";
import "./App.css";

function App() {
  return (
    <>
      <h1>Summary App</h1>
      <Fileupload/>
    </>
  );
}

export default App;
