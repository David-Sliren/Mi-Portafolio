import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Certificates from "../components/Certificates/Certificates";
import { useEffect } from "react";
import { useState } from "react";

const DEFAULT_VALUE = {
  containerPricipal: " relative lg:h-[300vh] ",
  containerStiki:
    "lg:sticky lg:top-0 flex items-center h-screen overflow-hidden",
  containerSlice: "flex",
  range: ["0vw", "-100vw"],
};

const HorizontalScroll = ({
  id,
  children,
  classNameCP,
  stikyClassName,
  slideClassName,
  range = [],
}) => {
  const refScroll = useRef(null);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({ target: refScroll });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    range.length ? range : DEFAULT_VALUE.range,
  );

  return (
    <div
      id={id}
      ref={refScroll}
      className={classNameCP ? classNameCP : DEFAULT_VALUE.containerPricipal}
    >
      <article
        className={
          stikyClassName ? stikyClassName : DEFAULT_VALUE.containerStiki
        }
      >
        <motion.div
          style={{ x: isSmallDevice ? 0 : x }}
          className={
            slideClassName ? slideClassName : DEFAULT_VALUE.containerSlice
          }
        >
          {children}
        </motion.div>
      </article>
    </div>
  );
};

export default HorizontalScroll;
