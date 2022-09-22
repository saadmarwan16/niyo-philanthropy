import qs from "qs";

const getGalleryQuery = () => {
  return qs.stringify(
    {
      populate: {
        images: {
          populate: "*",
        },
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

export default getGalleryQuery;
