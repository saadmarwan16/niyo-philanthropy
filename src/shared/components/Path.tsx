import { motion } from "framer-motion";
import { FunctionComponent } from "react";

const Path = (props: any) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
};

export default Path;
