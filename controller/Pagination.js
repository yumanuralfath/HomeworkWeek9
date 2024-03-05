//make function for pagination
const paginateResult = (page, limit, data) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < data.length) {
    // information about the next page
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    // information about the Previous page
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.results = data.slice(startIndex, endIndex);
  return results;
};

export default paginateResult;
