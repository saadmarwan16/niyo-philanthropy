import { FunctionComponent, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import { UserModel } from "../../modules/auth/data/models/user_model";
import addProfileImage from "../utils/addProfileImage";
import deleteProfileImage from "../utils/deleteProfileImage";
import updateProfileImage from "../utils/updateProfileImage";

interface DrawerProfileImageUpdateProps {
  user: UserModel;
  setUser: (user: UserModel) => void;
}

const DrawerProfileImageUpdate: FunctionComponent<
  DrawerProfileImageUpdateProps
> = ({ user, setUser }) => {
  const [isAddingImage, setIsAddingImage] = useState(false);
  const [isUpdatingImage, setIsUpdatingImage] = useState(false);
  const [isDeletingImage, setIsDeletingImage] = useState(false);

  return (
    <div className="flex items-center justify-center gap-3">
      {user.profile_image?.url ? (
        <>
          <>
            <input
              type="file"
              accept="image/*"
              id="update_profile_image_mobile"
              className="hidden"
              onChange={async (e) => {
                const files = e.target.files;
                if (files) {
                  setIsUpdatingImage(true);
                  await updateProfileImage(files, user, setUser);
                  setIsUpdatingImage(false);
                }
              }}
            />

            <label
              htmlFor="update_profile_image_mobile"
              className={`text-white btn btn-primary btn-square ${
                isUpdatingImage && "loading"
              } ${isDeletingImage && "btn-disabled"}`}
            >
              {!isUpdatingImage && (
                <MdModeEdit className="text-2xl hover:cursor-pointer hover:text-accent" />
              )}
            </label>
          </>

          <button
            className={`text-white btn btn-primary btn-square ${
              isDeletingImage && "loading"
            } ${isUpdatingImage && "btn-disabled"}`}
          >
            {!isDeletingImage && (
              <MdDelete
                className="text-2xl hover:cursor-pointer hover:text-accent"
                onClick={async () => {
                  setIsDeletingImage(true);
                  await deleteProfileImage(user, setUser);
                  setIsDeletingImage(false);
                }}
              />
            )}
          </button>
        </>
      ) : (
        <>
          <input
            type="file"
            accept="image/*"
            id="add_profile_image_mobile"
            className="hidden"
            onChange={async (e) => {
              const files = e.target.files;
              if (files) {
                setIsAddingImage(true);
                await addProfileImage(files, user, setUser);
                setIsAddingImage(false);
              }
            }}
          />

          <label
            htmlFor="add_profile_image_mobile"
            className={`text-white btn btn-primary btn-square ${
              isAddingImage && "loading"
            }`}
          >
            {!isAddingImage && (
              <TiUserAdd className="text-3xl hover:text-accent" />
            )}
          </label>
        </>
      )}
    </div>
  );
};

export default DrawerProfileImageUpdate;
