import { FunctionComponent, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Routes from "../../../constants/routes";
import { IoIosArrowForward } from "react-icons/io";
import { Datum } from "../data/models/blogs_model";
import { BASE_URL } from "../../../constants/urls";

interface HeroBlogProps {
  blog: Datum;
}

const HeroBlog: FunctionComponent<HeroBlogProps> = ({ blog }) => {
  const {
    attributes: {
      title,
      time_to_read,
      introduction,
      category,
      image: imageData,
    },
  } = blog;
  const image = useMemo(() => {
    if (imageData.data?.attributes.url) {
      return imageData.data.attributes.url;
    }
  }, [imageData.data?.attributes.url]);
  return (
    <div className="blog-campaign-main-hero-section-container">
      <Image
        src={image ? `${BASE_URL}${image}` : "/images/no_image.jpg"}
        alt="Blog Image"
        layout="fill"
      />
      <div className="blog-main-hero-section blog-campaign-horizontal-padding">
        <div className="flex items-center gap-3 heading3 !font-medium">
          <span>{category.data?.attributes.title}</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>{time_to_read} min read</span>
        </div>
        <div>
          <h3 className="heading3 line-clamp-1">{title}</h3>
          <p className="text-gray-200 line-clamp-2">{introduction}</p>
        </div>
        <Link
          href={Routes.BLOG_DETAILS("this-is-the-title", blog.id.toString())}
        >
          <a className="gap-2 sm:gap-3 custom-btn-secondary w-fit">
            Read Article <IoIosArrowForward className="text-lg sm:text-xl" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeroBlog;
