import type { GetServerSideProps, NextPage } from "next";
import ContactUs from "../src/modules/home/components/ContactUs";
import Details from "../src/modules/home/components/Details";
import Footer from "../src/modules/home/components/Footer";
import HomeCampaigns from "../src/modules/home/components/HomeCampaigns";
import HomeCategories from "../src/modules/home/components/HomeCategories";
import HomeMainHero from "../src/modules/home/components/HomeMainHero";
import MissionAndVision from "../src/modules/home/components/MissionAndVision";
import SupportMethods from "../src/modules/home/components/SupportMethods";
import homeController from "../src/modules/home/controllers/home_controller";
import { HomeModel } from "../src/modules/home/data/models/home_model";
import Meta from "../src/shared/components/Meta";
import { ErrorModel } from "../src/shared/errors/error_model";
import { BiErrorAlt } from "react-icons/bi";

interface HomeProps {
  error: ErrorModel | null;
  results: HomeModel | null;
}

const Home: NextPage<HomeProps> = ({ error, results }) => {
  const data = results?.data.attributes;

  return (
    <div>
      <Meta titlePrefix="Home" />

      {!data ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <BiErrorAlt className="mb-8 text-9xl text-error" />
          <h2 className="heading2">{error?.name ?? "An error occured"}</h2>
          <p>
            {error?.message ??
              "Consider checking your internet connection and then refreshing this page"}
          </p>
        </div>
      ) : (
        <>
          <HomeMainHero
            title={data.slogan}
            description={data.company_description}
          />
          <MissionAndVision mission={data.mission} vision={data.vision} />
          <Details
            children_description={data.making_difference_children_description}
            description={data.company_description}
            donation_description={data.making_difference_donation_description}
            medical_description={data.making_difference_medical_description}
          />
          <SupportMethods />
          <HomeCategories
            description={data.categories_description}
            food_description={data.categories_food_description}
            human_description={data.categories_human_description}
            medicine_description={data.categories_medicine_description}
            study_description={data.categories_study_description}
            title={data.categories_title}
          />
          <HomeCampaigns campaigns={data.campaigns} />
          <ContactUs />
          <Footer
            description={data.company_description}
            email={data.email}
            phone_number={data.phone_number}
            physical_address={data.physical_address}
          />
        </>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const results = await homeController.getPage();

  return {
    props: results,
  };
};

export default Home;
