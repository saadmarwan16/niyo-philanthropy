import { FunctionComponent } from "react";
import { MissionAndVision } from "../data/models/home_page_model";

interface MissionAndVisionProps {
  data: MissionAndVision;
}

const MissionAndVision: FunctionComponent<MissionAndVisionProps> = ({
  data,
}) => {
  return (
    <section className="flex flex-col gap-6 py-16 home-section-horizontal-padding">
      <h1 className="heading1">Mission and Vision</h1>
      <div className="flex flex-col gap-8 sm:gap-16 md:gap-24 lg:gap-32 sm:flex-row sm:justify-between">
        <div className="flex flex-col w-full gap-4">
          <h1 className="heading2">Our Mission</h1>
          <p>{data.our_mission}</p>
        </div>
        <div className="flex flex-col w-full gap-4">
          <h1 className="heading2">Our Vision</h1>
          <p>{data.our_vision}</p>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
