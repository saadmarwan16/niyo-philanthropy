import { stringify } from "qs";

const getHomeQuery = () => {
  return stringify(
    {
      populate: {
        campaigns: {
          populate: {
            image: {
              fields: ["url"],
            },
          },
        },
        footer: {
          fields: ["description", "email", "phone", "address"],
        },
        about_us: {
          populate: "*",
        },
        achievements: {
          populate: "*",
        },
        categories: {
          populate: "*",
        },
        mission_and_vision: {
          populate: "*",
        },
        making_difference: {
          populate: {
            description: {
              populate: "*",
            },
            image1: {
              populate: "*",
            },
            image2: {
              populate: "*",
            },
            image3: {
              populate: "*",
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

export default getHomeQuery;
