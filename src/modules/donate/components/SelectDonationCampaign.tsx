import { FunctionComponent } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Campaign } from "../data/models/donate_page_model";

interface SelectDonationCampaignProps {
  campaigns: Campaign[];
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
}

const SelectDonationCampaign: FunctionComponent<
  SelectDonationCampaignProps
> = ({ campaigns, error, register }) => {
  return (
    <div className="w-full form-control">
      <label className="label">
        <span className="font-semibold label-text">Add product to brand</span>
      </label>

      <select
        className={`custom-select !bg-base-300 ${error?.message && "!border-error"}`}
        defaultValue="disabled"
        {...register}
      >
        <option value="disabled" disabled>
          Choose a product
        </option>
        {campaigns.map((campaign, index) => (
          <option key={index} value={campaign.id}>
            {campaign.title}
          </option>
        ))}
      </select>

      {error?.message && (
        <label className="label">
          <span className="label-text-alt text-error">{error.message}</span>
        </label>
      )}
    </div>
  );
};

export default SelectDonationCampaign;
