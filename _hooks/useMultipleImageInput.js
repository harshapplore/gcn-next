import { useState, useEffect, useRef } from "react";

export function useMultiImageInput() {
  const [_data, setData] = useState([]);

  const inputRef = useRef();

  console.log(_data);

  useEffect(() => {
    if (!inputRef) return;

    inputRef.current.onchange = (e) => {
      const files = [...e.target.files];

      let data = [];

      files.map((file) => {
        const url = URL.createObjectURL(file);
        const image = new Image();
        image.src = url;

        image.onload = () => {
          data = [
            ...data,
            {
              url: url,
              size: file.size,
              width: image.width,
              height: image.height,
              file,
            },
          ];

          setData(data);
        };
      });
    };
  }, [inputRef]);

  return {
    ref: inputRef,
    data: _data,
  };
}

export function useMultiImageInput2() {
  const [_data, setData] = useState([]);

  const inputRef = useRef();
  const dataRef = useRef();

  console.log(_data);

  useEffect(() => {
    if (!inputRef) return;

    inputRef.current.onchange = (e) => {
      const files = [...e.target.files];

      let data = [];

      files.map((file) => {
        const url = URL.createObjectURL(file);
        const image = new Image();
        image.src = url;

        image.onload = () => {
          data = [
            ...data,
            {
              url: url,
              size: file.size,
              width: image.width,
              height: image.height,
              file,
            },
          ];

          dataRef.current = data;
        };
      });
    };
  }, [inputRef]);

  return {
    ref: inputRef,
    dataRef: dataRef,
    data: _data,
  };
}

export default useMultiImageInput;
