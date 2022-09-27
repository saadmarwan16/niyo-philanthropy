import { FunctionComponent } from "react";
import Image from "next/image";
import { IImagesObj } from "../../../shared/types/interface";

interface ImagesProps {
  images: IImagesObj[];
  isViewerOpen: boolean;
  openImageViewer: (index: number) => void;
}

const Images: FunctionComponent<ImagesProps> = ({
  images,
  isViewerOpen,
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
          <div
            className={`!flex h-full items-center justify-center text-xl text-center transition-all text-white flex-grow text-overlay hover:text-white text-transparent text-opacity-0 ${
              !isViewerOpen && "z-10"
            }`}
          >
            {image.title}
          </div>
          <div>
            <Image
              src={image.url}
              alt={image.title}
              layout="fill"
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
