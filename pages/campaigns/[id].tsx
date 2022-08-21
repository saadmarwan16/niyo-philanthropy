import type { NextPage } from "next";
import Meta from "../../src/shared/components/Meta";

interface CampaignDetailsPageProps {}

const CampaignDetails: NextPage<CampaignDetailsPageProps> = ({}) => {
  return (
    <div>
      <Meta titlePrefix="Campaign Details" />

      <main>Campaigns Details View is working</main>
    </div>
  );
};

export default CampaignDetails;
