import qs from "qs";

const getBlogsQuery = () => {
  return qs.stringify(
    {
      populate: {
        image: {
          fields: ["url"],
        },
        category: {
          populate: "*",
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
};

export default getBlogsQuery;
