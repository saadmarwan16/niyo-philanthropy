import { FunctionComponent } from "react";
import { AboutUs } from "../data/models/home_page_model";

interface AboutUsProps {
  data: AboutUs;
}

const AboutUs: FunctionComponent<AboutUsProps> = ({ data }) => {
  return (
    <section
      id="about-us"
      className="flex flex-col gap-6 py-16 home-section-horizontal-padding bg-primary bg-opacity-5"
    >
      <h1 className="heading1">About Us</h1>
      <div className="flex flex-col gap-8 sm:gap-16 md:gap-24 lg:gap-32 sm:flex-row sm:justify-between">
        <div className="flex flex-col w-full gap-4">
          <h1 className="heading2">Who We Are</h1>
          <p>{data.who_we_are}</p>
        </div>
        <div className="flex flex-col w-full gap-4">
          <h1 className="heading2">What We Do</h1>
          <p>{data.what_we_do}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
