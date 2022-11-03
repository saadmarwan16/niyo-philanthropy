import { FunctionComponent, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import { BASE_URL } from "../../../constants/urls";
import Avatar from "../../../shared/components/Avatar";
import addProfileImage from "../../../shared/utils/addProfileImage";
import deleteProfileImage from "../../../shared/utils/deleteProfileImage";
import updateProfileImage from "../../../shared/utils/updateProfileImage";
import { useAuthContext } from "../../auth/AuthContext";
import ProfileImageUpdateLoader from "./ProfileImageUpdateLoader";

const ProfileImage: FunctionComponent = () => {
  const [isUpdatingImage, setIsUpdatingImage] = useState(false);
  const { user, setUser } = useAuthContext();

  return (
    <>
      {isUpdatingImage ? (
        <div className="flex items-center justify-center w-32 h-32 bg-black bg-opacity-25 rounded-lg">
          <ProfileImageUpdateLoader size={15} color="#51D6FF" />
        </div>
      ) : (
        <div className="image-container fade">
          <div
            className={
              "!flex h-full absolute w-full items-center justify-center gap-2 flex-wrap text-center transition-all text-white flex-grow text-overlay hover:text-white text-transparent text-opacity-0 z-10"
            }
          >
            {user?.profile_image?.url ? (
              <>
                <>
                  <input
                    type="file"
                    accept="image/*"
                    id="update_profile_image"
                    className="hidden"
                    onChange={async (e) => {
                      const files = e.target.files;
                      if (files) {
                        setIsUpdatingImage(true);
                        await updateProfileImage(files, user!, setUser);
                        setIsUpdatingImage(false);
                      }
                    }}
                  />

                  <label htmlFor="update_profile_image">
                    <MdModeEdit className="text-4xl hover:cursor-pointer hover:text-accent" />
                  </label>
                </>
                <MdDelete
                  className="text-4xl hover:cursor-pointer hover:text-accent"
                  onClick={async () => {
                    setIsUpdatingImage(true);
                    await deleteProfileImage(user!, setUser);
                    setIsUpdatingImage(false);
                  }}
                />
              </>
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  id="add_profile_image"
                  className="hidden"
                  onChange={async (e) => {
                    const files = e.target.files;
                    if (files) {
                      setIsUpdatingImage(true);
                      await addProfileImage(files, user!, setUser);
                      setIsUpdatingImage(false);
                    }
                  }}
                />

                <label htmlFor="add_profile_image">
                  <TiUserAdd className="text-5xl hover:cursor-pointer hover:text-accent" />
                </label>
              </>
            )}
          </div>
          <Avatar
            alt="User Profile Image"
            url={
              user?.profile_image?.url
                ? `${BASE_URL}${user.profile_image.url}`
                : "/images/no_profile_image.webp"
            }
            width="w-32"
          />
        </div>
      )}
    </>
  );
};

export default ProfileImage;
