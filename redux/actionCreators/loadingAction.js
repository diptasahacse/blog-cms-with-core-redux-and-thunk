import { ADMIN_LOADING_START, ADMIN_LOADING_STOP, LOADING_START, LOADING_STOP } from "../actionTypes/actionTypes";

export const loadingStart = () => {
  return { type: LOADING_START };
};
export const loadingStop = () => {
  return { type: LOADING_STOP };
};

export const adminLoadingStart = () => {
  return { type: ADMIN_LOADING_START };
};
export const adminLoadingStop = () => {
  return { type: ADMIN_LOADING_STOP };
};
