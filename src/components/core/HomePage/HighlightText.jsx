import React from "react";
import {motion} from "framer-motion"

const HighlightText = ({text}) => {
  return (
    <motion.span
      initial={{opacity:0, scale:0.1, letterSpacing:2}}
      whileInView={{opacity:1, scale:1, letterSpacing:1}}
      transition={{duration:1}}
    className="text-5xl bg-gradient-to-r from-[#5f5fff] to-[#ff1d1d] text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </motion.span>
  );
};

export default HighlightText;
