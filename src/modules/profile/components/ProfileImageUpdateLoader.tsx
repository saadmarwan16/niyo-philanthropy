interface ProfileImageUpdateLoaderProps {}
import { FunctionComponent } from "react";
import { SyncLoader } from "react-spinners";

interface ProfileImageUpdateLoaderProps {
  size: number;
  color: string;
}

const ProfileImageUpdateLoader: FunctionComponent<
  ProfileImageUpdateLoaderProps
> = ({ size, color }) => {
  return (
    <SyncLoader
      color={color}
      size={size}
      aria-label="Profile image update loader"
    />
  );
};

export default ProfileImageUpdateLoader;
