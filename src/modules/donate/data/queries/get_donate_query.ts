import qs from "qs";

const getDonateQuery = () => {
  return qs.stringify(
    {
      populate: {
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

export default getDonateQuery;
