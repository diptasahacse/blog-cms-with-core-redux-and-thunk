import { LOADING_START, LOADING_STOP } from "../actionTypes/actionTypes";

const initialValue = {
  loadingStatus: false,
};
const loadingReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loadingStatus: true,
      };
    case LOADING_STOP:
      return {
        ...state,
        loadingStatus: false,
      };
    default:
      return state;
  }
};
export default loadingReducer;
