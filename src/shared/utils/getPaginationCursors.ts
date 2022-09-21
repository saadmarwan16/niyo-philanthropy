const getPaginationCursors = (
  page: number,
  itemsCount: number,
  pageSize: number
) => {
  const startingCursor = 1 + (page - 1) * pageSize;
  const endingCursor = startingCursor + itemsCount - 1;

  return {
    startingCursor,
    endingCursor,
  };
};

export default getPaginationCursors;
