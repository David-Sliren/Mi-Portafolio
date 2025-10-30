import { useState, useEffect, useRef } from "react";

export function Nanao(data) {
  return data;
}

function useObserver(opciones, one = false) {
  const [isActive, setIsActive] = useState(false);
  //   const main = useRef(null);
  const child = useRef(null);

  useEffect(() => {
    const target = child.current;

    if (!target) return;

    function callBack([entrada]) {
      console.log("hola");
      if (entrada.isIntersecting) {
        setIsActive(entrada.isIntersecting);

        if (one) {
          oberver.unobserve(target);
        }
      } else if (!one) {
        setIsActive(false);
      }
    }
    const oberver = new IntersectionObserver(callBack, opciones);

    oberver.observe(target);

    return () => {
      oberver.disconnect();
    };
  }, [opciones]);

  return [child, isActive];
}

export default useObserver;
