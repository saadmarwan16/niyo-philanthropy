import { FunctionComponent, useMemo } from "react";
import { CampaignModelData } from "../data/models/campaign_model";
import Image from "next/image";
import { BASE_URL } from "../../../constants/urls";
import ContactUs from "../../../shared/components/ContactUs";
import Footer from "../../../shared/components/Footer";

interface SingleCampaignDetailsProps {
  data: CampaignModelData;
}

const SingleCampaignDetails: FunctionComponent<SingleCampaignDetailsProps> = ({
  data,
}) => {
  const {
    amount_raised,
    body,
    category,
    conclusion,
    createdAt,
    footer,
    image: imageData,
    introduction,
    target,
    time_to_read,
    title,
  } = data.attributes;
  const image = useMemo(() => {
    return imageData.data?.attributes.url;
  }, [imageData.data?.attributes.url]);

  return (
    <main className="">
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
            <progress
              className="w-full mt-4 sm:mt-6 progress progress-primary"
              value={amount_raised}
              max={target}
            />
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold">${amount_raised}</span>
                <span> / </span>
                <span className="text-gray-500">{target}</span>
              </div>
              <div>
                <p className="font-semibold">
                  {((amount_raised / target) * 100).toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/5 avatar">
            <div className="w-full !aspect-[2/1] sm:!aspect-[5/2] lg:!aspect-[5/2]">
              <Image
                src={image ? `${BASE_URL}${image}` : "/images/image1.jpg"}
                alt=""
                layout="fill"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full gap-8 sm:w-4/5 lg:w-2/3 xl:w-3/5">
            <div>
              <h2 className="mb-2 heading2">Introduction</h2>
              <p>{introduction}</p>
            </div>
            <div>
              <h2 className="mb-2 heading2">Body</h2>
              <p>{body}</p>
            </div>
            <div>
              <h2 className="mb-2 heading2">Conclusion</h2>
              <p>{conclusion}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <h2 className="heading2">Found this story interesting?</h2>
              <span className="text-gray-500">
                Support the stories you find touching
              </span>
            </div>
            <button className="custom-btn-secondary">Donate Now</button>
          </div>
        </div>
      </div>
      <Footer data={footer.data.attributes} />
    </main>
  );
};

export default SingleCampaignDetails;
