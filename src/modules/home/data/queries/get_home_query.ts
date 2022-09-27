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
            category: {
              fields: ["title"],
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
              fields: ["url"],
            },
            image2: {
              fields: ["url"],
            },
            image3: {
              fields: ["url"],
            },
          },
        },
        hero_details: {
          populate: {
            detail1: {
              populate: {
                hero_image: {
                  fields: ["url"],
                },
              },
            },
            detail2: {
              populate: {
                hero_image: {
                  fields: ["url"],
                },
              },
            },
            detail3: {
              populate: {
                hero_image: {
                  fields: ["url"],
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

export default getHomeQuery;
