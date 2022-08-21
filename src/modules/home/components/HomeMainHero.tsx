import { FunctionComponent } from "react";
import Header from "./Header";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import Routes from "../../../constants/routes";
import OverlappingGrid from "../../../shared/components/OverlappingGrid";

interface HomeMainHeroProps {
  title: string;
  description: string;
}

const HomeMainHero: FunctionComponent<HomeMainHeroProps> = ({
  title,
  description,
}) => {
  return (
    <section className="py-4 text-white bg-gradient-to-br from-[#358470] to-primary sm:py-6 md:py-8 home-section-horizontal-padding slanted-div background-image-texture selection:bg-secondary">
      <Header />

      <div className="flex flex-col items-center gap-16 mt-8 md:gap-32 sm:justify-between md:flex-row sm:mt-28">
        <div className="flex flex-col w-full gap-6 sm:gap-10 md:w-2/5">
          <div className="flex flex-col gap-4">
            <h1 className="heading1">{title}</h1>

            <p>{description}</p>
          </div>

          <Link href={Routes.ABOUT_US}>
            <a className="w-40 gap-2 custom-btn-secondary sm:w-64">
              Learn more
              <AiOutlineArrowRight className="text-lg font-semibold" />
            </a>
          </Link>
        </div>

        <OverlappingGrid
          image_path1="/images/image1.jpg"
          image_path2="/images/image2.jpg"
          image_path3="/images/image3.jpg"
        />
      </div>
    </section>
  );
};

export default HomeMainHero;
