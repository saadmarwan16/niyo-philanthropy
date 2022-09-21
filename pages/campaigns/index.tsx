import type { GetServerSideProps, NextPage } from "next";
import Meta from "../../src/shared/components/Meta";
import Link from "next/link";
import Header from "../../src/shared/components/Header";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Routes from "../../src/constants/routes";
import campaignsController from "../../src/modules/campaign/controllers/campaigns_controller";
import { ErrorModel } from "../../src/shared/errors/error_model";
import { CampaignsModel } from "../../src/modules/campaign/data/models/campaigns_model";
import { useMemo, useState } from "react";
import Campaign from "../../src/modules/campaign/components/Campaign";
import HeroCampaign from "../../src/modules/campaign/components/HeroCampaign";
import getPaginationCursors from "../../src/shared/utils/getPaginationCursors";
import ErrorContent from "../../src/shared/components/ErrorContent";
import CustomLoader from "../../src/shared/components/CustomLoader";

interface CampaignsPageProps {
  error: ErrorModel | null;
  campaigns: CampaignsModel | null;
}

const Campaigns: NextPage<CampaignsPageProps> = (props) => {
  const [campaigns, setCampaigns] = useState(props.campaigns);
  const [error, setError] = useState(props.error);
  const [isLoading, setIsLoading] = useState(false);
  const pagination = useMemo(() => {
    if (!campaigns) return null;

    const { page, total, pageSize } = campaigns.meta.pagination;
    const pagination = getPaginationCursors(
      page,
      campaigns.data.length,
      pageSize
    );

    return {
      ...pagination,
      total,
    };
  }, [campaigns]);

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
              <main>
                <HeroCampaign
                  campaign={
                    campaigns.data[
                      Math.floor(Math.random() * campaigns.data.length)
                    ]
                  }
                />
                <div className="flex flex-col gap-4 py-16 sm:gap-6 md:gap-8 blog-campaign-horizontal-padding">
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                    <div>
                      <h1 className="heading1">Campaigns</h1>
                      <p className="text-gray-500">
                        Read interesting stories from real peope
                      </p>
                    </div>
                    <span className="px-2 py-0.5 md:py-1 sm:px-3 md:px-4 border border-gray-500 rounded-lg text-sm sm:text-base w-fit">
                      {pagination?.startingCursor} - {pagination?.endingCursor}{" "}
                      of {pagination?.total}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {campaigns.data.map((campaign) => (
                      <Campaign key={campaign.id} campaign={campaign} />
                    ))}
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      className={`custom-btn-secondary-square ${
                        campaigns.meta.pagination.page <= 1 && "!btn-disabled"
                      }`}
                    >
                      <IoIosArrowBack className="sm:text-xl" />
                    </button>
                    <span className="h-full p-4 text-xl">
                      {campaigns.meta.pagination.page}
                    </span>
                    <button
                      className={`custom-btn-secondary-square ${
                        campaigns.meta.pagination.page >=
                          campaigns.meta.pagination.pageCount && "!btn-disabled"
                      }`}
                    >
                      <IoIosArrowForward className="sm:text-xl" />
                    </button>
                  </div>
                </div>
              </main>
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
