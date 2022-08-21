import type { NextPage } from "next";
import Meta from "../../src/shared/components/Meta";

interface CampaignsPageProps {}

const Campaigns: NextPage<CampaignsPageProps> = ({}) => {
  return (
    <div>
      <Meta titlePrefix="Campaigns" />

      <main>Campaigns View is working</main>
    </div>
  );
};

export default Campaigns;
