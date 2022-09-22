import Link from "next/link";
import { FunctionComponent } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Routes from "../../constants/routes";
import { useAuthContext } from "../../modules/auth/AuthContext";
import Avatar from "./Avatar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const { user } = useAuthContext();
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

        {user ? (
          <Link href={Routes.USER_PROFILE(user.username)}>
            <a>
              <div className="flex items-center gap-4">
                <Avatar
                  url={
                    user.profile_image?.url
                      ? user.profile_image.url
                      : "/images/no_profile_image.webp"
                  }
                  width="w-16"
                  alt="User Profile Image"
                />

                <div className="flex flex-col">
                  <span className="font-semibold line-clamp-1">
                    {user.full_name}
                  </span>
                  <small className="text-base italic line-clamp-1">
                    @{user.username}
                  </small>
                </div>
              </div>
            </a>
          </Link>
        ) : (
          <Link href={Routes.LOGIN}>
            <a className="text-white normal-case border-white btn btn-outline hover:border-base-300 hover:bg-transparent">
              Login / Register
            </a>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
