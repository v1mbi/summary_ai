import React, { useRef } from "react";
import { fileConvert } from "../functions/fileConvertor";

function Fileupload({setText}) {
  const type = useRef('any')
  
  

  function handleFile(rawDoc){
    type.current = fileConvert(rawDoc,setText)
  }

  return (
    <>
      <input type="file" onChange={(e) => handleFile(e.target.files[0])} accept=".xls, .xlsx, .pdf, .doc, .docx, .txt" className="file-input file-input-primary bg-white text-black" />
    </>
  );
}

export default Fileupload;
