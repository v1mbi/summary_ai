import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Fileupload from "./components/fileupload";
import "./App.css";
import { fetch_Response } from "./functions/ai_connect_api";
import Display from "./components/display";

function App() {
  const response = useRef("hello")
  return (
    <>
      <Display/>
    </>
  );
}

export default App;
