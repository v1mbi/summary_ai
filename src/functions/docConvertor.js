import Mammoth from "mammoth";

const readDocxFile = async (file, setFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      const arrayBuffer = e.target.result;

      // Extract text using Mammoth
      Mammoth.extractRawText({ arrayBuffer })
        .then((result) => {
          resolve(result.value);
          setFile(result.value); // Explicit return statement
        })
        .catch((error) => {
          return null; // Explicit return statement for errors
        });
    };

    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
};

export default readDocxFile;
