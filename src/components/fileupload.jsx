import React, { useState } from "react";
import { extractTextFromPDF } from "../functions/pdfConvertor";
import { extractTextFromExcel } from "../functions/excelConvertor";
import { FileType } from "../functions/fileType";

function Fileupload() {
  const [file, setFile] = useState("Failed");
  const [rawDoc,setRawDoc] = useState(null)
  //extractTextFromPDF(rawDoc,setFile)
    extractTextFromExcel(rawDoc)
  
  return (
    <>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setRawDoc(e.target.files[0])
        }
      />
      {FileType(rawDoc)}
    </>
  );
}

export default Fileupload;
