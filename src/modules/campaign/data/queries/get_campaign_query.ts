import qs from "qs";

const getCampaignQuery = () => {
  return qs.stringify(
    {
      populate: {
        image: {
          fields: ["url"],
        },
        category: {
          populate: "*",
        },
        footer: {
          fields: ["description", "email", "phone", "address"],
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
};

export default getCampaignQuery;
