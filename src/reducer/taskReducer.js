import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};


function taskReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK: {
      return {};
    }
    case ACTION_TYPES.DELETE_TASK: {
      return {};
    }
    case ACTION_TYPES.UPDATE_TASK: {
      return {};
    }
    default: {
      return state;
    }
  }
}

export default taskReducer;
