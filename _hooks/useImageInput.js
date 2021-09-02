import { useState, useEffect, useRef } from "react";

export function useImageInput() {
  const [_data, setData] = useState({});

  const inputRef = useRef();

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
