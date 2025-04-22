import { getDocument } from "pdfjs-dist";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export async function readPDFFile(file,setWords) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = async () => {
      const pdf = await getDocument(reader.result).promise;
      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        text += textContent.items.map((item) => item.str).join(" ") + "\n";
      }

      setWords(text); // Extracted text
    };
  }