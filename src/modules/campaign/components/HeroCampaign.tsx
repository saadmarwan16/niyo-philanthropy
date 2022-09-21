import { FunctionComponent, useMemo } from "react";
import { Datum } from "../data/models/campaigns_model";
import Image from "next/image";
import Link from "next/link";
import Routes from "../../../constants/routes";
import { IoIosArrowForward } from "react-icons/io";
import { BASE_URL } from "../../../constants/urls";

interface HeroCampaignProps {
  campaign: Datum;
}

const HeroCampaign: FunctionComponent<HeroCampaignProps> = ({ campaign }) => {
  const { id, attributes: data } = campaign;
  const image = useMemo(() => {
    return data.image.data?.attributes.url;
  }, [data.image.data?.attributes.url]);

  return (
    <div className="campaign-main-hero-section-container">
      <Image
        src={image ? `${BASE_URL}${image}` : "/images/no_image.jpg"}
        alt="Blog Image"
        layout="fill"
      />
      <div className="campaign-main-hero-section blog-campaign-horizontal-padding">
        <div className="flex items-center gap-3 heading3 !font-medium">
          <span>{data.category.data?.attributes.title ?? 'No Category'}</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>{data.time_to_read} min read</span>
        </div>
        <div>
          <h3 className="heading3 line-clamp-1">{data.title}</h3>
          <p className="text-gray-200 line-clamp-2">{data.introduction}</p>
        </div>
        <div className="hidden md:block">
          <progress
            className="w-full mt-4 sm:mt-6 progress progress-primary"
            value={data.amount_raised}
            max={data.target}
          />
          <div className="flex items-center justify-between">
            <div>
              <span className="font-semibold">${data.amount_raised}</span>
              <span> / </span>
              <span className="text-gray-300">{data.target}</span>
            </div>
            <div>
              <p className="font-semibold">
                {((data.amount_raised / data.target) * 100).toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
        <Link href={Routes.CAMPAIGN_DETAILS(data.slug, id.toString())}>
          <a className="gap-2 sm:gap-3 custom-btn-secondary w-fit">
            Read Story <IoIosArrowForward className="text-lg sm:text-xl" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeroCampaign;
