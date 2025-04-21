import React, { useState } from "react";
import { extractTextFromPDF } from "../functions/pdfConvertor";

import { FileType } from "../functions/fileType";
import readExcelFile from "../functions/excelConvertor";

function Fileupload() {
  const [file, setFile] = useState("Failed");
  const [rawDoc,setRawDoc] = useState(null)
  //extractTextFromPDF(rawDoc,setFile)
  //readExcelFile(rawDoc,setFile)
    console.log(file)
  
  return (
    <>
      <input
        type="file"
        onChange={(e) => setRawDoc(e.target.files[0])
        }
      />
      {FileType(rawDoc)}
    </>
  );
}

export default Fileupload;
