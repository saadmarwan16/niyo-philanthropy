import { INavItem } from "../shared/types/interface";
import Routes from "./routes";

const navItems: INavItem[] = [
  {
    id: 0,
    title: "Campaigns",
    route: Routes.CAMPAIGNS,
  },
  {
    id: 1,
    title: "Gallery",
    route: Routes.GALLERY,
  },
  {
    id: 2,
    title: "Donate",
    route: Routes.DONATE,
  },
  {
    id: 3,
    title: "Blog",
    route: Routes.BLOG,
  },
];

export default navItems;
