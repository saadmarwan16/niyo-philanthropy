import type { NextPage } from "next";
import Meta from "../src/shared/components/Meta";

interface GalleryPageProps {}

const Gallery: NextPage<GalleryPageProps> = ({}) => {
  return (
    <div>
      <Meta titlePrefix="Gallery" />

      <main>Gallery View is working</main>
    </div>
  );
};

export default Gallery;
