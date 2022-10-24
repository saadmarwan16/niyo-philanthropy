import { FunctionComponent, useState } from "react";
import Image from "next/image";
import ProfileHeading from "./ProfileHeading";
import { Donation } from "../data/models/profile_model";
import { getDateMMMDDYYYY } from "../../../shared/utils/getFormatedDates";
import { BASE_URL } from "../../../constants/urls";
import Link from "next/link";
import Routes from "../../../constants/routes";
import { MdOutlineHourglassEmpty } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface DonationSectionProps {
  donations: Donation[];
}

const DonationSection: FunctionComponent<DonationSectionProps> = (props) => {
  const [donations, _] = useState(props.donations);
  const [start, setStart] = useState(0);
  const control = useAnimation();

  const changeSliceIndex = (isForward: boolean) => {
    control.start({
      opacity: [1, 0],
      transition: { duration: 0.75 },
    });

    if (isForward) {
      setStart(start + 5);
    } else {
      setStart(start - 5);
    }

    control.start({
      opacity: [0, 1],
      transition: { duration: 0.75 },
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <ProfileHeading
        title="My Donations"
        description="View the donations you've made"
      />
      {donations.length > 0 ? (
        <>
          <div className="w-full overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Campaign</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <motion.tbody animate={control}>
                {donations.slice(start, start + 5).map((donation) => {
                  const { id, amount, campaign, createdAt, status } = donation;
                  return (
                    <tr key={id}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="w-12 h-12 mask mask-squircle">
                              <Image
                                src={
                                  campaign.image
                                    ? `${BASE_URL}${campaign.image.url}`
                                    : "/images/no_image.jpg"
                                }
                                alt="Avatar Tailwind CSS Component"
                                layout="fill"
                              />
                            </div>
                          </div>
                          <div>
                            <Link
                              href={Routes.CAMPAIGN_DETAILS(
                                campaign.slug,
                                campaign.id.toString()
                              )}
                            >
                              <a className="font-bold hover:text-primary">
                                {campaign.title}
                              </a>
                            </Link>
                            <div className="text-sm opacity-50">
                              {campaign.category?.title ?? "No Category"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>${amount.toFixed(2)}</td>
                      <td
                        className={`font-semibold && ${
                          status === "Paid" ? "text-success" : "text-error"
                        }`}
                      >
                        {status}
                      </td>
                      <td>{getDateMMMDDYYYY(createdAt)}</td>
                    </tr>
                  );
                })}
              </motion.tbody>
            </table>
          </div>
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
                start + 5 >= donations.length && "!btn-disabled"
              }`}
              onClick={() => changeSliceIndex(true)}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center flex-grow gap-6 px-2 py-24 text-center">
          <MdOutlineHourglassEmpty className="text-5xl sm:text-6xl md:text-8xl" />
          <div>
            <p className="mb-2 heading2">No Donation Content to Show</p>
            <p>Available donations would appear here</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationSection;
