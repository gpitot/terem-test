const isValid = (query, { title, location }) => {
  return (
    title.toLowerCase().includes(query) ||
    location.toLowerCase().includes(query)
  );
};

//given data and filter query filter the data
const filter = (query, data) => {
  const loweredQuery = query.toLowerCase();
  const filtered = [];
  for (let i = 0; i < data.length; i += 1) {
    filtered.push({
      ...data[i],
      visible: isValid(loweredQuery, data[i])
    });
  }
  return filtered;
};

export { filter };
