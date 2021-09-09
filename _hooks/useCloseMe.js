import { useEffect, useRef } from "react";

const useCloseMe = (close) => {
  const ref = useRef(null);

  useEffect(() => {
    if(!ref || !ref.current) return;

    document.addEventListener("click", (event) => {
      const isClickInside = ref.current && ref.current.contains(event.target);

      if (!isClickInside) close();
    });
  }, [ref]);

  return ref;
};

export default useCloseMe;
