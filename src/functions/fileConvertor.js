import { readPDFFile } from "../functions/pdfConvertor";
import { FileType } from "../functions/fileType";
import readExcelFile from "../functions/excelConvertor";
import readDocxFile from "../functions/docConvertor";
import { readTxtFile } from "../functions/txtConvertor";

export function fileConvert(file, setFile) {
  const type = FileType(file);
  switch (type) {
    case "pdf":
      readPDFFile(file, setFile);
    case "docx":
    case "doc":
      readDocxFile(file, setFile);
    case "txt":
      readTxtFile(file, setFile);
    case "xlsx":
    case "xls":
      readExcelFile(file, setFile);
    default: setFile(null)
  }
  return type;
}
