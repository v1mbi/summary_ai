export const readTxtFile = async (file, setFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        let text = e.target.result;
        setFile(text)
        return resolve(e.target.result); // Explicitly returning the file content
      };
  
      reader.onerror = (error) => {
        return reject(error); // Returning an error in case of failure
      };
  
      reader.readAsText(file); // Reading the file as plain text
    });
  };
  