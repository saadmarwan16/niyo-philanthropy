import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import SingleCampaignDetails from "../../../src/modules/campaign/components/SingleCampaignDetails";
import campaignController from "../../../src/modules/campaign/controllers/campaign_controller";
import { CampaignModel } from "../../../src/modules/campaign/data/models/campaign_model";
import CustomLoader from "../../../src/shared/components/CustomLoader";
import ErrorContent from "../../../src/shared/components/ErrorContent";
import Header from "../../../src/shared/components/Header";
import Meta from "../../../src/shared/components/Meta";
import { ErrorModel } from "../../../src/shared/errors/error_model";

interface CampaignDetailsPageProps {
  id: string;
  error: ErrorModel | null;
  campaign: CampaignModel | null;
}

const CampaignDetails: NextPage<CampaignDetailsPageProps> = (props) => {
  const [campaign, setCampaign] = useState(props.campaign);
  const [error, setError] = useState(props.error);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Meta titlePrefix="Campaign Details" />

      <div>
        <div className="header-section">
          <Header />
        </div>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <>
            {campaign ? (
              <SingleCampaignDetails data={campaign.data} />
            ) : (
              <ErrorContent
                title={`product with id of #${props.id}`}
                errorName={error?.name}
                errorMessage={error?.message}
                setContent={() => {
                  setIsLoading(true);
                  campaignController
                    .getOne(props.id)
                    .then((res) => {
                      const { error, campaign } = res;
                      if (error) {
                        setError(error);
                      } else {
                        setCampaign(campaign);
                      }
                    })
                    .finally(() => setIsLoading(false));
                }}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id as string;

  const results = await campaignController.getOne(id);

  return {
    props: {
      id,
      ...results,
    },
  };
};

export default CampaignDetails;
