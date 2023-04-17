import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  loading: loadingReducer,
});

export default rootReducer;
