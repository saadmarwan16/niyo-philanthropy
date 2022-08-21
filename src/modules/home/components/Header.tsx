import Link from "next/link";
import { FunctionComponent } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Routes from "../../../constants/routes";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <section>
      <div className="flex items-center justify-between md:hidden">
        {/* <div className="collapse w-min">
          <input type="checkbox" className="!min-h-0 !p-0" />
          <div className="min-h-0 p-0 text-3xl font-medium collapse-title">
            <GiHamburgerMenu />
          </div>
          <div className="w-64 px-0 drop-shadow-2xl collapse-content">
            <div className="flex flex-col py-4 bg-primary">
              <NavLinks />

              <Link href={Routes.LOGIN}>
                <a className="w-48 mt-8 custom-btn-accent-outline btn-outline">
                  Login / Register
                </a>
              </Link>
            </div>
          </div>
        </div> */}

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
    </section>
  );
};

export default Header;
