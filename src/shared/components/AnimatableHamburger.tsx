import { FunctionComponent, useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import MobileNavigation from "./MobileNavigation";
import MenuToggle from "./MenuToggle";
import sidebar from "../../constants/sidebar";

interface AnimatableHamburgerProps {}

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);

  return dimensions.current;
};

const AnimatableHamburger: FunctionComponent<
  AnimatableHamburgerProps
> = ({}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`side-bar ${isOpen && 'z-50'}`}
    >
      <motion.div className="background" variants={sidebar} />
      <MobileNavigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default AnimatableHamburger;
