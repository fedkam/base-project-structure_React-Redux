const updateData = (data, action) => {
  console.log("____ updateData ____");
  console.log("---updateData = ", data);
  if (data === undefined) {
    return {
      datas: "fetch_data",
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        datas: "",
        loading: true,
        error: null
      };

    case "FETCH_DATA_SUCCESS":
      return {
        datas: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_DATA_FAILURE":
      return {
        datas: "",
        loading: false,
        error: action.payload
      };

    default:
      return data;
  }
};

export default updateData;
