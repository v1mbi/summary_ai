import * as XLSX from "xlsx";

const readExcelFile = async (file, setFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      let outputText = "";

      // Loop through all sheets
      workbook.SheetNames.forEach((sheetName) => {
        outputText += `Sheet: ${sheetName}\n`;
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        outputText += jsonData.map((row) => row.join("\t")).join("\n") + "\n\n";
      });
      setFile(outputText);
      resolve(outputText);
      
    };

    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
    
  });
  
};

export default readExcelFile;
