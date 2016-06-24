import * as types from '../actions/action-types';

const initialState = {
  currPage: types.pages.LIST_VIEW
};

export default function receiptSaverApp(state = initialState, action = {}) {
  switch (action.type) {
    case types.SHOW_CAMERA_VIEW:
      return {
        ...state,
        currPage: types.pages.CAMERA_VIEW
      };
    case types.SHOW_LIST_VIEW:
      return {
        ...state,
        currPage: types.pages.LIST_VIEW
      };
    default:
      return state;
  }
};