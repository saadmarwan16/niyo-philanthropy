import { INavItem } from "../shared/types/interface";
import Routes from "./routes";
import { GrGallery } from "react-icons/gr";
import { MdOutlineCampaign } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";

const navItems: INavItem[] = [
  {
    icon: <MdOutlineCampaign />,
    title: "Campaigns",
    route: Routes.CAMPAIGNS,
  },
  {
    icon: <GrGallery />,
    title: "Gallery",
    route: Routes.GALLERY,
  },
  {
    icon: <BiDonateHeart />,
    title: "Donate",
    route: Routes.DONATE,
  },
  {
    icon: <RiArticleLine />,
    title: "Blog",
    route: Routes.BLOG,
  },
];

export default navItems;
