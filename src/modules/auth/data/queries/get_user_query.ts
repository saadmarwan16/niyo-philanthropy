import qs from "qs";

const getUserQuery = () => {
  return qs.stringify(
    {
      populate: {
        role: {
          populate: "*",
        },
        profile_image: {
          fields: ["url"],
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
};

export default getUserQuery;
