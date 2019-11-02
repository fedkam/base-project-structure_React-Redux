const dataRequested = () => {
  return {
    type: "FETCH_DATA_REQUEST"
  };
};

const dataLoaded = newData => {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: newData
  };
};

const dataError = error => {
  return {
    type: "FETCH_DATA_FAILURE",
    payload: error
  };
};

const fetchData = (dataService, dispatch) => () => {
  console.log("____ Action _____");
  console.log(" ---fetchData() dataService = ", dataService);
  dispatch(dataRequested());
  dataService
    .getData()
    .then(datas => dispatch(dataLoaded(datas)))
    .catch(err => dispatch(dataError(err)));
};

export { fetchData };
