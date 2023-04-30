import { ADMIN_LOADING_START, ADMIN_LOADING_STOP, LOADING_START, LOADING_STOP } from "../actionTypes/actionTypes";

const initialValue = {
  loadingStatus: false,
  adminLoadingStatus:false
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
    case ADMIN_LOADING_START:
      return {
        ...state,
        adminLoadingStatus: true,
      };
    case ADMIN_LOADING_STOP:
      return {
        ...state,
        adminLoadingStatus: false,
      };
    default:
      return state;
  }
};
export default loadingReducer;
