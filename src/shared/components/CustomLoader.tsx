import { FunctionComponent } from "react";
import BeatLoader from "react-spinners/BeatLoader";

interface CustomLoaderProps {}

const CustomLoader: FunctionComponent<CustomLoaderProps> = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-2 py-4 text-center">
      <BeatLoader color={"#59C3C3"} size={20} />
    </div>
  );
};

export default CustomLoader;
