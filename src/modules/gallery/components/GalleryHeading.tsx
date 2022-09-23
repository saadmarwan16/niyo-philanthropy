import { FunctionComponent } from "react";
import { PurpleAttributes } from "../data/models/gallery_model";

interface GalleryHeadingProps {
  data: PurpleAttributes;
}

const GalleryHeading: FunctionComponent<GalleryHeadingProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-8 heading3 text-primary">{data.title}</h3>
      <h1 className="mb-3 heading1">Niyo Philanthropy</h1>
      <p className="w-4/5 text-center sm:w-3/5 md:w-3/6">{data.description}</p>
    </div>
  );
};

export default GalleryHeading;
