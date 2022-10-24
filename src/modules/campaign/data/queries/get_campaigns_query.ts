import qs from "qs";

const getCampaignsQuery = () => {
  return qs.stringify(
    {
      pagination: {
        start: 0,
        limit: -1,
      },
      filters: {
        completed: {
          $eq: false,
        },
      },
      populate: {
        image: {
          fields: ["url"],
        },
        category: {
          populate: "*",
        },
        // footer: {
        //   fields: ["description", "email", "phone", "address"],
        // },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
};

export default getCampaignsQuery;
