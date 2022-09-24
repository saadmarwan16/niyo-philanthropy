import { FunctionComponent } from "react";
import Image from "next/image";
import ProfileHeading from "./ProfileHeading";

interface DonationSectionProps {}

const DonationSection: FunctionComponent<DonationSectionProps> = () => {
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
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <Image
                        src="https://placeimg.com/192/192/people"
                        alt="Avatar Tailwind CSS Component"
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Help children go to school</div>
                    <div className="text-sm opacity-50">Human</div>
                  </div>
                </div>
              </td>
              <td>$40.00</td>
              <td className="font-semibold text-success">Paid</td>
              <td>Aug 14, 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationSection;
