import { useState, useEffect, useRef } from "react";

export function useImageInput() {
  const [_data, setData] = useState({});

  const inputRef = useRef();
  if(_data.size > 1000000)
  {
       alert("Please add image below 1mb")
    setData({})
  }
  
console.log(_data)
  useEffect(() => {
    if (!inputRef) return;

    inputRef.current.onchange = (e) => {
      const file = e.target.files[0];

      const url = URL.createObjectURL(file);
      const image = new Image();
      image.src = url;

      image.onload = () => {
        setData({
          url: url,
          size: file.size,
          width: image.width,
          height: image.height,
          file,
          hash: Math.floor(Math.random() * 100)
        });
      };
    };
  }, [inputRef]);

  return {
    ref: inputRef,
    ..._data,
  };
}

export default useImageInput;
