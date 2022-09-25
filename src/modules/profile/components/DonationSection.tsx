import { FunctionComponent } from "react";
import Image from "next/image";
import ProfileHeading from "./ProfileHeading";
import { Donation } from "../data/models/profile_model";
import { getDateMMMDDYYYY } from "../../../shared/utils/getFormatedDates";
import { BASE_URL } from "../../../constants/urls";

interface DonationSectionProps {
  donations: Donation[];
}

const DonationSection: FunctionComponent<DonationSectionProps> = ({
  donations,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <ProfileHeading
        title="My Donations"
        description="View the donations you've made"
      />
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
          <tbody>
            {donations.map((donation) => {
              const { id, amount, campaign, createdAt, status } = donation;
              return (
                <tr key={id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          <Image
                            src={campaign.image ? `${BASE_URL}${campaign.image.url}` : '/images/no_image.jpg'}
                            alt="Avatar Tailwind CSS Component"
                            layout="fill"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{campaign.title}</div>
                        <div className="text-sm opacity-50">Human</div>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationSection;
