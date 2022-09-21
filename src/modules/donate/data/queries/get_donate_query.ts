import qs from "qs";

const getDonateQuery = () => {
  return qs.stringify(
    {
      populate: {
        footer: {
          populate: "*",
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
};

export default getDonateQuery;
