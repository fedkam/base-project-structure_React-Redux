import updateData from "./update-data";

const reducer = (state, action) => {
  return {
    dataForTestComonent: updateData(state, action)
  };
};

export default reducer;
