import Link from "next/link";
import { FunctionComponent } from "react";
import Routes from "../../constants/routes";

interface NavLinksProps {}

const NavLinks: FunctionComponent<NavLinksProps> = () => {
  return (
    <>
      <Link href={Routes.CAMPAIGNS}>
        <a className="hover:text-accent-focus w-fit">Campaigns</a>
      </Link>
      <Link href={Routes.GALLERY}>
        <a className="hover:text-accent-focus w-fit">Gallery</a>
      </Link>
      <Link href={Routes.DONATE}>
        <a className="hover:text-accent-focus w-fit">Donate</a>
      </Link>
      <Link href={Routes.BLOG}>
        <a className="hover:text-accent-focus w-fit">Blog</a>
      </Link>
    </>
  );
};

export default NavLinks;
