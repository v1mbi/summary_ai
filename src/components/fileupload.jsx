import React, { useState, useRef } from "react";
import { fileConvert } from "../functions/fileConvertor";

function Fileupload() {
  const [file, setFile] = useState("Failed");
  const type = useRef('any')
  console.log(file)
  

  function handleFile(rawDoc){
    type.current = fileConvert(rawDoc,setFile)
  }

  return (
    <>
      <input type="file" onChange={(e) => handleFile(e.target.files[0])} accept=".xls, .xlsx, .pdf, .doc, .docx, .txt" />
      {type.current}
    </>
  );
}

export default Fileupload;
