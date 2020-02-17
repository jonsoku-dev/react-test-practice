export default ({ dispatch }) => next => async action => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  try {
    const response = await action.payload;
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  } catch (err) {
    console.error(err);
  }
};
