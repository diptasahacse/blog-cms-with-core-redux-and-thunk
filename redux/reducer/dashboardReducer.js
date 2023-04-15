import { SIDE_BAR_TOGGLE } from "../actionTypes/actionTypes";

const initialState = {
  sideBarOpen: true,
};
const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDE_BAR_TOGGLE:
      return {
        ...state,
        sideBarOpen: !state.sideBarOpen,
      };
    default:
      return state;
  }
};
export default dashboardReducer;
