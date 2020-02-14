import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export async function fetchComments() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    return {
      type: FETCH_COMMENTS,
      payload: response,
    };
  } catch (err) {
    console.error(err);
  }
}

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
}
