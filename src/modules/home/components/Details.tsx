import { FunctionComponent } from "react";
import { FaChild } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { MdLocalHospital } from "react-icons/md";
import HomeDetailsOverlappingGrid from "../../../shared/components/HomeDetailsOverlappingGrid";
import { MakingDifference } from "../data/models/home_page_model";

interface DetailsProps {
  data: MakingDifference;
}

const Details: FunctionComponent<DetailsProps> = ({ data }) => {
  return (
    <section className="flex flex-col gap-16 py-16 lg:gap-32 bg-primary bg-opacity-5 home-section-horizontal-padding lg:flex-row">
      <HomeDetailsOverlappingGrid
        image_path1="/images/image5.jpg"
        image_path2="/images/image6.jpg"
        image_path3="/images/image7.jpg"
      />

      <div className="flex flex-col w-full gap-5 lg:w-1/2">
        <h1 className="heading1">How we are making a difference</h1>
        <p>{data.children}</p>
        <div className="flex gap-6 text-primary">
          <FaChild className="text-8xl text-primary" />
          <p>{data.children}</p>
        </div>
        <div className="flex gap-6 text-primary">
          <MdLocalHospital className="text-8xl text-primary" />
          <p>{data.medicine}</p>
        </div>
        <div className="flex gap-6 text-primary">
          <BiDonateHeart className="text-8xl text-primary" />
          <p>{data.donation}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
