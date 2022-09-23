import { motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent } from "react";
import navItems from "../../constants/nav_items";
import Routes from "../../constants/routes";
import { BASE_URL } from "../../constants/urls";
import { variants, variants2 } from "../../constants/variants";
import { useAuthContext } from "../../modules/auth/AuthContext";
import Avatar from "./Avatar";
import MobileLoginRegisterButton from "./MobileLoginRegisterButton";
import MobileNavigationMenuItem from "./MobileNavigationMenuItem";

interface MobileNavigationProps {}

const MobileNavigation: FunctionComponent<MobileNavigationProps> = () => {
  const { user } = useAuthContext();

  return (
    <motion.ul className="mobile-nav-items" variants={variants}>
      {user ? (
        <motion.div variants={variants2}>
          <Link href={Routes.USER_PROFILE(user.username)}>
            <a>
              <div className="flex flex-col items-center justify-center gap-4 mb-8">
                <Avatar
                  url={
                    user.profile_image?.url
                      ? `${BASE_URL}${user.profile_image.url}`
                      : "/images/no_profile_image.webp"
                  }
                  width="w-20"
                  alt="User Profile Image"
                />

                <div className="flex flex-col text-black">
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
        </motion.div>
      ) : (
        <MobileLoginRegisterButton />
      )}

      {navItems.map((item, index) => (
        <MobileNavigationMenuItem item={item} key={index} />
      ))}
    </motion.ul>
  );
};

export default MobileNavigation;
