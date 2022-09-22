import dayjs from "dayjs";

export const getDateMMMDDYYYY = (date?: Date) => {
  return dayjs(date).format("MMM DD, YYYY");
};
