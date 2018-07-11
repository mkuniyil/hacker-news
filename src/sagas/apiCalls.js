import { genericApiCall } from "./apiHelper";

/**
 * Method for fetching artist data
 *
 * @param {string} name
 */
const fetchNewsFeedIds = () => {
  const options = {
    method: "get",
    url: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  };

  return genericApiCall(options);
};

/**
 * Method for fetching artist data
 *
 * @param {string} name
 */
const fetchStoryItem = id => {
  const options = {
    method: "get",
    url: `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  };

  return genericApiCall(options);
};

export { fetchNewsFeedIds, fetchStoryItem };
