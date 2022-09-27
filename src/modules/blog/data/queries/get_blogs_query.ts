import qs from "qs";

const getBlogsQuery = (page: number) => {
  return qs.stringify(
    {
      sort: ["createdAt:desc"],
      pagination: {
        page,
        pageSize: 12,
      },
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
