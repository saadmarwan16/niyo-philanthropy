import type { NextPage } from "next";
import Meta from "../src/shared/components/Meta";

interface AboutUsPageProps {}

const AboutUs: NextPage<AboutUsPageProps> = ({}) => {
  return (
    <div>
      <Meta titlePrefix="About Us" />

      <main>About Us View is working</main>
    </div>
  );
};

export default AboutUs;
