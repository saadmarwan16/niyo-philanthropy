import Link from "next/link";
import { FunctionComponent } from "react";
import Routes from "../../constants/routes";
import Image from "next/image";
import { UserModel } from "../../modules/auth/data/models/user_model";
import { BASE_URL } from "../../constants/urls";

interface DrawerProfileLinkProps {
  user: UserModel;
}

const DrawerProfileLink: FunctionComponent<DrawerProfileLinkProps> = ({
  user,
}) => {
  return (
    <Link href={Routes.USER_PROFILE(user.username)}>
      <a>
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-20" style={{ height: "80px" }}>
              <Image
                src={
                  user.profile_image?.url
                    ? `${BASE_URL}${user.profile_image.url}`
                    : "/images/no_profile_image.webp"
                }
                layout="fill"
                alt="User Profile Image"
                className="h-20 rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col mt-2 text-center text-black">
            <span className="font-semibold line-clamp-1">{user.full_name}</span>
            <small className="text-base italic w-[280px] line-clamp-1">
              @{user.username}
            </small>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default DrawerProfileLink;
