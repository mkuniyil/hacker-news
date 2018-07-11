import { connect } from "react-redux";
import { getNewsFeedIds } from "../actions";
import StoryItem from "../components/storyItem/StoryItem";

/**
 * Transfer a state to component's props
 *
 * @param {Object} isOpened - a state of store
 *
 * @return {Object} - object with props
 */
const mapStateToProps = state => {
  return { ...state.items };
};

/**
 * Defines callbacks to change a state of store
 *
 * @property {Function} toggleModal
 */
const mapDispatchToProps = {
  getNewsFeedIds
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryItem);
