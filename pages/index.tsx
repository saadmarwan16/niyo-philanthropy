import type { GetServerSideProps, NextPage } from 'next';
import ContactUs from '../src/shared/components/ContactUs';
import Details from '../src/modules/home/components/Details';
import Footer from '../src/shared/components/Footer';
import HomeCampaigns from '../src/modules/home/components/HomeCampaigns';
import HomeCategories from '../src/modules/home/components/HomeCategories';
import HomeMainHero from '../src/modules/home/components/HomeMainHero';
import MissionAndVision from '../src/modules/home/components/MissionAndVision';
import SupportMethods from '../src/modules/home/components/SupportMethods';
import homeController from '../src/modules/home/controllers/home_controller';
import { HomeModel } from '../src/modules/home/data/models/home_page_model';
import Meta from '../src/shared/components/Meta';
import { ErrorModel } from '../src/shared/errors/error_model';
import { BiErrorAlt } from 'react-icons/bi';
import AboutUs from '../src/modules/home/components/AboutUs';
import Achievements from '../src/modules/home/components/Achievements';
import { useAuthContext } from '../src/modules/auth/AuthContext';

interface HomeProps {
  error: ErrorModel | null;
  results: HomeModel | null;
}

const Home: NextPage<HomeProps> = ({ error, results }) => {
  const data = results?.data.attributes;
  const { user } = useAuthContext();

  return (
    <div>
      <Meta titlePrefix='Home' />

      {!data ? (
        <div className='flex flex-col items-center justify-center h-screen'>
          <BiErrorAlt className='mb-8 text-9xl text-error' />
          <h2 className='heading2'>{error?.name ?? 'An error occured'}</h2>
          <p>
            {error?.message ??
              'Consider checking your internet connection and then refreshing this page'}
          </p>
        </div>
      ) : (
        <>
          <HomeMainHero details={results.data.attributes.hero_details} />
          <AboutUs data={data.about_us} />
          <MissionAndVision data={data.mission_and_vision} />
          <Details data={data.making_difference} />
          <Achievements data={data.achievements} />
          <SupportMethods />
          <HomeCategories data={data.categories} />
          {data.campaigns.data.filter(
            (campaign) =>
              campaign.attributes.amount_raised < campaign.attributes.target
          ).length > 0 && <HomeCampaigns campaigns={data.campaigns} />}
          <ContactUs />
          <Footer data={data.footer.data.attributes} />
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
