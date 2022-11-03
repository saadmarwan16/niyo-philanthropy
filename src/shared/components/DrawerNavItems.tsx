import Link from "next/link";
import { FunctionComponent } from "react";
import navItems from "../../constants/nav_items";

interface DrawerNavItemsProps {}

const DrawerNavItems: FunctionComponent<DrawerNavItemsProps> = () => {
  return (
    <ul className="w-full p-2 menu rounded-box">
      {navItems.map((item, index) => (
        <li key={index} className="">
          <Link href={item.route}>
            <a className="text-2xl">
              {item.icon}
              <span className="text-xl">{item.title}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrawerNavItems;
