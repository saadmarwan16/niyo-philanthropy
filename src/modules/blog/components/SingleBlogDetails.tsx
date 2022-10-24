import { FunctionComponent } from "react";
import Image from "next/image";
import { BlogModelData } from "../data/models/blog_model";
import Footer from "../../../shared/components/Footer";
import { BASE_URL } from "../../../constants/urls";
import { getDateMMMDDYYYY } from "../../../shared/utils/getFormatedDates";
import Link from "next/link";
import Routes from "../../../constants/routes";

interface SingleBlogDetailsProps {
  data: BlogModelData;
}

const SingleBlogDetails: FunctionComponent<SingleBlogDetailsProps> = ({
  data,
}) => {
  const {
    body,
    category,
    conclusion,
    createdAt,
    footer,
    image: imageData,
    introduction,
    time_to_read,
    title,
  } = data.attributes;
  const image = imageData.data?.attributes.url;
  return (
    <main>
      <div className="!py-8 sm:!py-12 md:!py-16 main-section">
        <div className="flex flex-col items-center w-full gap-8 mx-auto sm:gap-12 md:gap-16 sm:w-5/6 lg:w-4/6">
          <div className="flex flex-col w-full gap-2 text-center sm:gap-3 md:gap-4 sm:4/5 md:w-2/3 lg:w-3/5">
            <div className="flex items-center justify-center gap-3 text-center">
              <span className="font-semibold">
                {category.data?.attributes.title ?? "No Category"}
              </span>
              <span className="w-1 h-1 bg-gray-800 rounded-lg"></span>
              <span className="font-semibold">{time_to_read} min read</span>
            </div>
            <h1 className="heading1 !font-medium">{title}</h1>
            <span className="text-gray-500">
              Published on {getDateMMMDDYYYY(createdAt)}
            </span>
          </div>
          <div className="w-full lg:w-4/5 avatar">
            <div className="w-full !aspect-[2/1] sm:!aspect-[5/2] lg:!aspect-[5/2]">
              <Image
                src={image ? `${BASE_URL}${image}` : "/images/no_image.jpg"}
                alt=""
                layout="fill"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full gap-8 sm:gap-10 md:gap-12 sm:w-4/5 lg:w-2/3 xl:w-3/5">
            <p>{introduction}</p>
            <p>{body}</p>
            <p>{conclusion}</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <h2 className="heading2">Found this article interesting?</h2>
              <span className="text-gray-500">
                Support the articles you find touching
              </span>
            </div>
            <Link href={Routes.DONATE}>
              <a className="custom-btn-secondary">Donate Now</a>
            </Link>
          </div>
        </div>
      </div>
      {footer.data?.attributes && <Footer data={footer.data.attributes} />}
    </main>
  );
};

export default SingleBlogDetails;
