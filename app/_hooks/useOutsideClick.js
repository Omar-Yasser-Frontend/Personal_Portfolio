import { useEffect, useRef } from "react";

export function useOutsideClick(close) {
  const ref = useRef();

  useEffect(
    function () {
      const clickCheck = (e) => {
        if (ref.current && !ref.current.contains(e.target)) close();
      };

      window.addEventListener("click", clickCheck);

      return () => window.removeEventListener("click", clickCheck);
    },
    [close]
  );

  return ref;
}
