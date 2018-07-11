import { actionTypes } from "../config";

/**
 * Action method for returning the artist details  action type
 *
 * @returns {Object}
 */
const getNewsFeedIds = () => {
  return {
    type: actionTypes.getNewsFeedIds
  };
};

/**
 * Action method for returning the artist details  action type
 *
 * @param {string} searchStr
 * @returns {Object}
 */
const getNewsFeedIdsSuccess = data => {
  return {
    type: actionTypes.getNewsFeedIdsSuccess,
    data
  };
};

/**
 * Action method for returning the artist details  action type
 *
 * @returns {Object}
 */
const getStoryItem = id => {
  return {
    type: actionTypes.getStoryItem,
    id
  };
};

/**
 * Action method for returning the artist details  action type
 *
 * @param {string} searchStr
 * @returns {Object}
 */
const getStoryItemSuccess = data => {
  return {
    type: actionTypes.getStoryItemSuccess,
    data
  };
};

export {
  getNewsFeedIds,
  getNewsFeedIdsSuccess,
  getStoryItem,
  getStoryItemSuccess
};
