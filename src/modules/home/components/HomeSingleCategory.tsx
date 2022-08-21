import { FunctionComponent } from "react";

interface HomeSingleCategoryProps {
  title: string;
  description: string;
  icon: JSX.Element;
  iconColor: string;
  iconBackgroundColor: string;
}

const HomeSingleCategory: FunctionComponent<HomeSingleCategoryProps> = ({
  description,
  icon,
  iconBackgroundColor,
  iconColor,
  title,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center lg:w-48">
      <div
        className={`p-2 sm:p-4 text-3xl rounded-lg bg-opacity-10 ${iconColor} ${iconBackgroundColor}`}
      >
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default HomeSingleCategory;
