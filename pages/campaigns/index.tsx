import type { NextPage } from "next";
import Meta from "../../src/shared/components/Meta";
import Link from "next/link";
import Header from "../../src/shared/components/Header";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Routes from "../../src/constants/routes";

interface CampaignsPageProps {}

const Campaigns: NextPage<CampaignsPageProps> = ({}) => {
  return (
    <>
      <Meta titlePrefix="Campaigns" />

      <div>
        <div className="header-section">
          <Header />
        </div>
        <main>
          <div className="campaign-main-hero-section-container">
            <Image src="/images/image8.jpg" alt="Blog Image" layout="fill" />
            <div className="campaign-main-hero-section blog-campaign-horizontal-padding">
              <div className="flex items-center gap-3 heading3 !font-medium">
                <span>Medicine</span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>8 min read</span>
              </div>
              <div>
                <h3 className="heading3 line-clamp-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p className="text-gray-200 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, corporis tempora aliquam quibusdam officia eveniet
                  reprehenderit ipsum sed aliquid similique possimus, animi,
                  explicabo eaque voluptas rerum obcaecati a alias magnam.
                </p>
              </div>
              <div className="hidden md:block">
                <progress
                  className="w-full mt-4 sm:mt-6 progress progress-primary"
                  value="40"
                  max="100"
                >
                  text
                </progress>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold">${300}</span>
                    <span> / </span>
                    <span className="text-gray-300">{1000}</span>
                  </div>
                  <div>
                    <p className="font-semibold">
                      {((300 / 1000) * 100).toFixed(2)}%
                    </p>
                  </div>
                </div>
              </div>
              <Link href={Routes.CAMPAIGN_DETAILS("this-is-the-title")}>
                <a className="gap-2 sm:gap-3 custom-btn-secondary w-fit">
                  Read Story{" "}
                  <IoIosArrowForward className="text-lg sm:text-xl" />
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-16 sm:gap-6 md:gap-8 blog-campaign-horizontal-padding">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h1 className="heading1">Campaigns</h1>
                <p className="text-gray-500">
                  Read interesting stories from real peope
                </p>
              </div>
              <span className="px-2 py-0.5 md:py-1 sm:px-3 md:px-4 border border-gray-500 rounded-lg text-sm sm:text-base w-fit">
                1 - 6 of 13
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div
                  key={num}
                  className="shadow-xl card card-compact bg-base-100"
                >
                  <div className="avatar">
                    <div className="w-full h-48 rounded-lg sm:h-56">
                      <Image
                        src="https://placeimg.com/400/225/arch"
                        alt="Shoes"
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="flex items-center gap-2 text-base bg-base-200 px-2 py-0.5 rounded-lg w-fit">
                      <small>Human</small>
                      <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
                      <small>6 min read</small>
                    </div>
                    <h2 className="card-title line-clamp-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <p className="line-clamp-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda, corporis tempora aliquam quibusdam officia
                      eveniet reprehenderit ipsum sed aliquid similique
                      possimus, animi, explicabo eaque voluptas rerum obcaecati
                      a alias magnam.
                    </p>
                    <progress
                      className="w-full mt-4 sm:mt-6 progress progress-primary"
                      value="40"
                      max="100"
                    >
                      text
                    </progress>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold">${300}</span>
                        <span> / </span>
                        <span className="text-gray-500">{1000}</span>
                      </div>
                      <div>
                        <p className="font-semibold">
                          {((300 / 1000) * 100).toFixed(2)}%
                        </p>
                      </div>
                    </div>
                    <div className="justify-end mt-2 card-actions">
                      <Link href={Routes.CAMPAIGN_DETAILS("this-is-the-title")}>
                        <a className="custom-btn-secondary">Read Story</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end">
              <button className="custom-btn-secondary-square">
                <IoIosArrowBack className="sm:text-xl" />
              </button>
              <span className="h-full p-4 text-xl">1</span>
              <button className="custom-btn-secondary-square">
                <IoIosArrowForward className="sm:text-xl" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Campaigns;
