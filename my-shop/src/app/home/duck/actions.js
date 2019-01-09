import types from './types';

const incrementCount = (value) => ({
  type: types.INCREMENT_COUNT,
  value: value
});

const decrementCount = (value) => ({
  type: types.DECREMENT_COUNT,
  value: value
});

const requestSubredditJson = (subreddit) => ({
  type: types.REQUEST_SUBREDDIT_JSON,
  subreddit: subreddit
});
const receiveSubredditJson = (json) => ({
  type: types.RECEIVE_SUBREDDIT_JSON,
  subredditData: json
});

export default {
  incrementCount,
  decrementCount,
  requestSubredditJson,
  receiveSubredditJson
}



// // actions.js by using reduxsauce
// import { createActions } from 'reduxsauce';

// const { Creators, Types } = createActions({
//   increment: ['value'],
//   decrement: ['value'],
//   requestSubredditJson: ['subreddit'],
//   receiveSubredditJson: ['subredditData']
// });

// export { Creators, Types };