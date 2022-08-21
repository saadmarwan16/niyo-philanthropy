import Image from "next/image";
import { FunctionComponent } from "react";

interface OverlappingGridProps {
  image_path1: string;
  image_path2: string;
  image_path3: string;
}

const OverlappingGrid: FunctionComponent<OverlappingGridProps> = ({
  image_path1,
  image_path2,
  image_path3,
}) => {
  return (
    <div className="w-full overlapping-grid md:w-3/5">
      <div className="avatar">
        <div className="w-64 rounded">
          <Image
            alt={image_path1}
            src={image_path1}
            layout="fill"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-64 rounded">
          <Image
            alt={image_path2}
            src={image_path2}
            layout="fill"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-64 rounded">
          <Image
            alt={image_path3}
            src={image_path3}
            layout="fill"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OverlappingGrid;
