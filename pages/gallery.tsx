/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from "next";
import { useCallback, useMemo, useState } from "react";
import Meta from "../src/shared/components/Meta";
import ImageViewer from "react-simple-image-viewer";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Header from "../src/shared/components/Header";
import Image from "next/image";
import galleryController from "../src/modules/gallery/controllers/gallery_controller";
import { ErrorModel } from "../src/shared/errors/error_model";
import { GalleryModel } from "../src/modules/gallery/data/models/gallery_model";
import ErrorContent from "../src/shared/components/ErrorContent";
import GalleryHeading from "../src/modules/gallery/components/GalleryHeading";
import Footer from "../src/shared/components/Footer";
import Images from "../src/modules/gallery/components/Images";
import { IImagesObj } from "../src/shared/types/interface";
import { BASE_URL } from "../src/constants/urls";

interface GalleryPageProps {
  error: ErrorModel | null;
  gallery: GalleryModel | null;
}

const Gallery: NextPage<GalleryPageProps> = (props) => {
  const [gallery, setGallery] = useState(props.gallery);
  const [error, setError] = useState(props.error);
  const images = useMemo(() => {
    const imagesStr: string[] = [];
    const imagesObj: IImagesObj[] = [];

    if (gallery) {
      const images = gallery.data.attributes.images;
      images.forEach((image, index) => {
        imagesStr.push(`${BASE_URL}${image.image.data.attributes.url}`);
        imagesObj.push({
          index,
          title: image.title,
          url: `${BASE_URL}${image.image.data.attributes.url}`,
        });
      });

      return { imagesStr, imagesObj };
    }
  }, [gallery]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // const images = [
  //   "http://placeimg.com/1200/800/nature",
  //   "http://placeimg.com/800/1200/nature",
  //   "http://placeimg.com/1920/1080/nature",
  //   "http://placeimg.com/1500/500/nature",
  //   "/images/image1.jpg",
  //   "/images/image2.jpg",
  //   "/images/image3.jpg",
  //   "/images/image4.jpg",
  //   "/images/image5.jpg",
  //   "/images/image6.jpg",
  //   "/images/image7.jpg",
  //   "/images/image8.jpg",
  // ];

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

      {gallery && images?.imagesObj ? (
        <main>
          <div className="flex flex-col items-center gap-16 py-4">
            <GalleryHeading data={gallery.data.attributes} />
            <Images
              images={images?.imagesObj}
              openImageViewer={openImageViewer}
            />
          </div>

          {gallery.data.attributes.footer.data?.attributes && (
            <Footer data={gallery.data.attributes.footer.data?.attributes} />
          )}

          {isViewerOpen && (
            <ImageViewer
              src={images?.imagesStr ?? []}
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
      ) : (
        <ErrorContent
          title="gallery"
          errorName={error?.name}
          errorMessage={error?.message}
          setContent={() => {}}
        />
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const results = await galleryController.getAll();

  return {
    props: results,
  };
};

export default Gallery;
