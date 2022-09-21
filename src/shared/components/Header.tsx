import Link from "next/link";
import { FunctionComponent } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Routes from "../../constants/routes";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header>
      <div className="flex items-center justify-between md:hidden">
        <GiHamburgerMenu className="text-3xl" />

        <Logo />
      </div>

      <div className="items-center justify-between hidden md:flex">
        <Logo />

        <div className="flex gap-6">
          <NavLinks />
        </div>

        <Link href={Routes.LOGIN}>
          <a className="text-white normal-case border-white btn btn-outline hover:border-base-300 hover:bg-transparent">
            Login / Register
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
