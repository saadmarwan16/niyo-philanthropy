import { FunctionComponent, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import Routes from "../../../constants/routes";
import { Campaigns } from "../data/models/home_page_model";
import { BASE_URL } from "../../../constants/urls";
import { motion, useAnimation } from "framer-motion";

interface HomeCampaignsProps {
  campaigns: Campaigns;
}

const HomeCampaigns: FunctionComponent<HomeCampaignsProps> = ({
  campaigns: { data },
}) => {
  const [campaigns, setCampaigns] = useState(data);
  const [start, setStart] = useState(0);
  const control = useAnimation();

  const changeSliceIndex = (isForward: boolean) => {
    control.start({
      opacity: [1, 0],
      transition: { duration: 0.75 },
    });

    if (isForward) {
      setStart(start + 3);
    } else {
      setStart(start - 3);
    }

    control.start({
      opacity: [0, 1],
      transition: { duration: 0.75 },
    });
  };

  return (
    <section className="flex flex-col gap-4 py-16 home-section-horizontal-padding bg-primary bg-opacity-5 sm:gap-6 md:gap-8">
      <div className="flex items-center justify-between">
        <h1 className="heading1">Recent campaigns</h1>
        <div className="flex gap-3">
          <button
            className={`!text-lg sm:!text-xl md:!text-2xl custom-btn-secondary-square ${
              start <= 0 && "!btn-disabled"
            }`}
            onClick={() => changeSliceIndex(false)}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={`!text-lg sm:!text-xl md:!text-2xl custom-btn-secondary-square ${
              start + 3 >= campaigns.length && "!btn-disabled"
            }`}
            onClick={() => changeSliceIndex(true)}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        animate={control}
      >
        {campaigns.slice(start, start + 3).map((campaign) => (
          <div
            key={campaign.id}
            className="shadow-xl card card-compact bg-base-100"
          >
            <div className="avatar">
              <div className="w-full h-64 rounded-lg sm:h-72">
                <Image
                  // src="/images/image4.jpg"
                  src={
                    campaign.attributes?.image?.data
                      ? `${BASE_URL}${campaign.attributes.image.data.attributes.url}`
                      : "/images/no_image.jpg"
                  }
                  alt="Help children rise out of poverty"
                  layout="fill"
                />
              </div>
              <span className="absolute bottom-0 left-0 px-4 py-1 text-white rounded-tr-lg bg-primary">
                Human
              </span>
            </div>
            <div className="gap-2 sm:gap-3 card-body">
              <Link href={Routes.CAMPAIGN_DETAILS("this is the title")}>
                <a className="hover:text-primary">
                  <h2 className="heading2 !font-medium line-clamp-1">
                    {campaign.attributes.title}
                  </h2>
                </a>
              </Link>
              <p className="text-gray-500 line-clamp-3">
                {/* {campaign.attributes.description} */}
                Description
              </p>
              <progress
                className="w-full mt-4 sm:mt-6 progress progress-primary"
                value="40"
                max="100"
              >
                text
              </progress>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold">
                    ${campaign.attributes.amount_raised}
                  </span>
                  <span> / </span>
                  <span className="text-gray-500">
                    {campaign.attributes.target}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">
                    {(
                      (campaign.attributes.amount_raised /
                        campaign.attributes.target) *
                      100
                    ).toFixed(2)}
                    %
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Link href={Routes.DONATE}>
                  <a className="custom-btn-secondary w-fit">Donate now</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HomeCampaigns;
