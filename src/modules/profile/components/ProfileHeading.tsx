import { FunctionComponent } from "react";

interface ProfileHeadingProps {
  title: string;
  description: string;
}

const ProfileHeading: FunctionComponent<ProfileHeadingProps> = ({
  title,
  description,
}) => {
  return (
    <div>
      <h1 className="heading1">{title}</h1>
      <p className="text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default ProfileHeading;
