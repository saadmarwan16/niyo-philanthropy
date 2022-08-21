import { stringify } from "qs";

const getHomePopulate = () => {
  return stringify({
    populate: {
      campaigns: {
        populate: {
          image: {
            fields: ["url"],
          },
        },
      },
    },
  });
};

export default getHomePopulate;
