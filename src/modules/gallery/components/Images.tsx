import { FunctionComponent } from "react";
import Image from "next/image";
import { IImagesObj } from "../../../shared/types/interface";

interface ImagesProps {
  images: IImagesObj[];
  openImageViewer: (index: number) => void;
}

const Images: FunctionComponent<ImagesProps> = ({
  images,
  openImageViewer,
}) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 p-8 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={index}
          className="items-center justify-center cursor-pointer avatar image-container fade"
          onClick={() => openImageViewer(image.index)}
          style={{ content: "Some context" }}
        >
          <div className="!flex h-full items-center justify-center text-xl text-center transition-all text-white flex-grow text-overlay z-10 hover:text-white text-transparent text-opacity-0">
            {image.title}
          </div>
          <div>
            <Image src={image.url} alt={image.title} layout="fill" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
