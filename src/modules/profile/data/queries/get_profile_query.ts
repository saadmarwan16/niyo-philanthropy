import { stringify } from "qs";

const getProfileQuery = () => {
  return stringify(
    {
      populate: {
        donations: {
          fields: ["amount", "status", "createdAt"],
          populate: {
            campaign: {
              fields: ["title", "slug"],
              populate: {
                image: {
                  fields: ["url"],
                },
                category: {
                  fields: ["title"],
                },
              },
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
};

export default getProfileQuery;
