export const readFiles = (files) => {
  const f = files.map((file) => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);

      reader.onerror = (e) => {
        reject("Error Occured while reading file.");
      };

      reader.readAsDataURL(file);
    });
  });

  return Promise.all(f);
};