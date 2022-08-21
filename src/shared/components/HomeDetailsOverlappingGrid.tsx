import Image from "next/image";
import { FunctionComponent } from "react";

interface HomeDetailsOverlappingGridProps {
  image_path1: string;
  image_path2: string;
  image_path3: string;
}

const HomeDetailsOverlappingGrid: FunctionComponent<HomeDetailsOverlappingGridProps> = ({
  image_path1,
  image_path2,
  image_path3,
}) => {
  return (
    <div className="w-full overlapping-grid lg:w-1/2">
      <div className="avatar">
        <div className="w-64 rounded">
          <Image
            alt="Image 1"
            src={image_path1}
            layout="fill"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-64 rounded">
          <Image
            alt="Image 2"
            src={image_path2}
            layout="fill"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-64 rounded">
          <Image
            alt="Image 3"
            src={image_path3}
            layout="fill"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDetailsOverlappingGrid;
