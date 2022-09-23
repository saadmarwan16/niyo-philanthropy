import { motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent } from "react";
import { variants2 } from "../../constants/variants";
import { INavItem } from "../types/interface";

interface MobileNavigationMenuItemProps {
  item: INavItem;
}

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];

const MobileNavigationMenuItem: FunctionComponent<
  MobileNavigationMenuItemProps
> = ({ item }) => {
  const style = { border: `2px solid ${colors[item.id]}` };

  return (
    <motion.li
      variants={variants2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={item.route}>
        <a>
          <div
            className="flex-grow w-56 px-2 py-1 text-lg text-black rounded-lg"
            style={style}
          >
            {item.title}
          </div>
        </a>
      </Link>
    </motion.li>
  );
};

export default MobileNavigationMenuItem;
