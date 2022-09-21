/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useCallback, useState } from "react";
import Meta from "../src/shared/components/Meta";
import ImageViewer from "react-simple-image-viewer";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Header from "../src/shared/components/Header";
import Image from "next/image";

interface GalleryPageProps {}

const Gallery: NextPage<GalleryPageProps> = ({}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "http://placeimg.com/1200/800/nature",
    "http://placeimg.com/800/1200/nature",
    "http://placeimg.com/1920/1080/nature",
    "http://placeimg.com/1500/500/nature",
  ];

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      <Meta titlePrefix="Gallery" />

      <div className="px-4 py-1 text-white md:py-4 bg-primary">
        <Header />
      </div>

      <main className="flex flex-col items-center gap-16 py-4">
        <div className="flex flex-col items-center">
          <h3 className="mb-8 heading3 text-primary">
            YOU MADE THIS POSSIBLE...
          </h3>
          <h1 className="mb-3 heading1">Niyo Philanthropy</h1>
          <p className="w-4/5 text-center sm:w-3/5 md:w-3/6">
            Niyo Philanthropy is a non-profit organization that collaborates
            with CHANGE-MAKERS to provide support to those in need. You TOO can
            be of great help
          </p>
        </div>
        <div className="grid w-full grid-cols-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative cursor-pointer avatar"
              onClick={() => openImageViewer(index)}
            >
              <div className="w-full fade">
                <img src={src} alt="" />
              </div>
            </div>
          ))}
        </div>

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
            rightArrowComponent={<BsChevronRight />}
            leftArrowComponent={<BsChevronLeft />}
          />
        )}
      </main>
    </div>
  );
};

export default Gallery;
