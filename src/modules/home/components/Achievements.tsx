import { FunctionComponent } from "react";
import {
  currencyFormatter,
  numberFormatter,
} from "../../../shared/utils/formatter";
import { Achievements } from "../data/models/home_page_model";

interface AchievementsProps {
  data: Achievements;
}

const Achievements: FunctionComponent<AchievementsProps> = ({ data }) => {
  return (
    <section className="flex flex-wrap justify-center gap-16 pb-16 lg:gap-32 bg-primary bg-opacity-5 home-section-horizontal-padding">
      <div className="text-white shadow stats stats-vertical sm:stats-horizontal bg-primary">
        <div className="stat">
          <div className="stat-value">
            {currencyFormatter.format(data.monthly_donation_amount)}+
          </div>
          <div className="stat-desc">Monthly Donation</div>
        </div>
        <div className="stat">
          <div className="stat-value">
            {numberFormatter.format(data.donations_received)}+
          </div>
          <div className="stat-desc">Donations Received</div>
        </div>
        <div className="stat">
          <div className="stat-value">
            {numberFormatter.format(data.active_campaigns)}+
          </div>
          <div className="stat-desc">Active Campaigns</div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
