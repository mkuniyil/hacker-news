import { actionTypes } from "../config";

/**
 * Reducer method for whole app
 *
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
const reducer = (
  state = {
    newsFeedIds: [],
    items: {}
  },
  action
) => {
  let newItems = { ...state.items };

  switch (action.type) {
    case actionTypes.getNewsFeedIdsSuccess:
      return {
        ...state,
        newsFeedIds: action.data
      };
    case actionTypes.getStoryItemSuccess:
      newItems[action.data.id] = action.data;
      return {
        ...state,
        items: newItems
      };
    default:
      return state;
  }
};

export default reducer;
