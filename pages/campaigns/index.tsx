import type { GetServerSideProps, NextPage } from "next";
import Meta from "../../src/shared/components/Meta";
import Header from "../../src/shared/components/Header";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import campaignsController from "../../src/modules/campaign/controllers/campaigns_controller";
import { ErrorModel } from "../../src/shared/errors/error_model";
import { CampaignsModel } from "../../src/modules/campaign/data/models/campaigns_model";
import { useState } from "react";
import Campaign from "../../src/modules/campaign/components/Campaign";
import HeroCampaign from "../../src/modules/campaign/components/HeroCampaign";
import ErrorContent from "../../src/shared/components/ErrorContent";
import CustomLoader from "../../src/shared/components/CustomLoader";
import { motion, useAnimation } from "framer-motion";
import EmptyContent from "../../src/shared/components/EmptyContent";

interface CampaignsPageProps {
  error: ErrorModel | null;
  campaigns: CampaignsModel | null;
}

const Campaigns: NextPage<CampaignsPageProps> = (props) => {
  const [campaigns, setCampaigns] = useState(props.campaigns);
  const [error, setError] = useState(props.error);
  const [start, setStart] = useState(0);
  const control = useAnimation();
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(12);

  const changeSliceIndex = (isForward: boolean) => {
    control.start({
      opacity: [1, 0],
      transition: { duration: 0.75 },
    });

    if (isForward) {
      setStart(start + pageSize);
    } else {
      setStart(start - pageSize);
    }

    control.start({
      opacity: [0, 1],
      transition: { duration: 0.75 },
    });
  };

  return (
    <>
      <Meta titlePrefix="Campaigns" />

      <div>
        <div className="header-section">
          <Header />
        </div>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <>
            {campaigns ? (
              <>
                {campaigns.data.length > 0 ? (
                  <main>
                    {campaigns.data.length > 0 && (
                      <HeroCampaign
                        campaign={
                          campaigns.data[
                            Math.floor(Math.random() * campaigns.data.length)
                          ]
                        }
                      />
                    )}
                    <div className="flex flex-col gap-4 py-16 sm:gap-6 md:gap-8 blog-campaign-horizontal-padding">
                      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                        <div>
                          <h1 className="heading1">Campaigns</h1>
                          <p className="text-gray-500">
                            Read interesting stories from real people
                          </p>
                        </div>
                        <span className="px-2 py-0.5 md:py-1 sm:px-3 md:px-4 border border-gray-500 rounded-lg text-sm sm:text-base w-fit">
                          {start + 1} -{" "}
                          {start + pageSize <= campaigns.meta.pagination.total
                            ? start + pageSize
                            : campaigns.meta.pagination.total}{" "}
                          of {campaigns.meta.pagination.total}
                        </span>
                      </div>
                      <motion.div
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                        animate={control}
                      >
                        {campaigns.data
                          .filter(
                            (campaign) =>
                              campaign.attributes.amount_raised <
                              campaign.attributes.target
                          )
                          .slice(start, start + pageSize)
                          .map((campaign) => (
                            <Campaign key={campaign.id} campaign={campaign} />
                          ))}
                      </motion.div>
                      <div className="flex justify-end gap-3">
                        <button
                          className={`!text-lg sm:!text-xl md:!text-2xl custom-btn-secondary-square ${
                            start <= 0 && "!btn-disabled"
                          }`}
                          onClick={() => changeSliceIndex(false)}
                        >
                          <IoIosArrowBack />
                        </button>
                        <button
                          className={`!text-lg sm:!text-xl md:!text-2xl custom-btn-secondary-square ${
                            start + pageSize >= campaigns.data.length &&
                            "!btn-disabled"
                          }`}
                          onClick={() => changeSliceIndex(true)}
                        >
                          <IoIosArrowForward />
                        </button>
                      </div>
                    </div>
                  </main>
                ) : (
                  <EmptyContent title="Campaign" content="campaigns" />
                )}
              </>
            ) : (
              <ErrorContent
                title="campaigns"
                errorName={error?.name}
                errorMessage={error?.message}
                setContent={() => {
                  setIsLoading(true);
                  campaignsController
                    .getAll()
                    .then((res) => {
                      const { error, campaigns } = res;
                      if (error) {
                        setError(error);
                      } else {
                        setCampaigns(campaigns);
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

export const getServerSideProps: GetServerSideProps = async () => {
  const results = await campaignsController.getAll();

  return {
    props: results,
  };
};

export default Campaigns;
