module.exports = {
  filters: {
    dateFormat: (value) => new Date(value).toLocaleDateString(),
    numberFormat: (value) => Number(value).toLocaleString()
  }
};
