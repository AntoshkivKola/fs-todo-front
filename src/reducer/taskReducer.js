import ACTION_TYPES from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const requestHandler = produce((draftState, action) => {
  draftState.isFetching = true;
});

const errorHandler = produce((draftState, action) => {
  const {
    payload: { error },
  } = action;
  draftState.error = error.response.data.errors[0];
  draftState.isFetching = false;
});

const handlers = {
  [ACTION_TYPES.CREATE_TASK_REQUEST]: requestHandler,
  [ACTION_TYPES.GET_TASK_REQUEST]: requestHandler,
  [ACTION_TYPES.UPDATE_TASK_REQUEST]: requestHandler,
  [ACTION_TYPES.DELETE_TASK_REQUEST]: requestHandler,

  [ACTION_TYPES.CREATE_TASK_ERROR]: errorHandler,
  [ACTION_TYPES.GET_TASK_ERROR]: errorHandler,
  [ACTION_TYPES.UPDATE_TASK_ERROR]: errorHandler,
  [ACTION_TYPES.DELETE_TASK_ERROR]: errorHandler,

  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { task },
    } = action;
    draftState.isFetching = false;
    draftState.error = null;
    draftState.tasks.push(task);
  }),
  [ACTION_TYPES.GET_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { tasks },
    } = action;
    draftState.isFetching = false;
    draftState.error = null;
    draftState.tasks = [...draftState.tasks, ...tasks];
  }),
  [ACTION_TYPES.UPDATE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { task: updateTask },
    } = action;
    draftState.isFetching = false;
    draftState.error = null;
    const updateTaskIndex = draftState.tasks.findIndex(
      task => task.id === updateTask.id
    );
    draftState.tasks[updateTaskIndex] = updateTask;
  }),
  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { id },
    } = action;
    draftState.isFetching = false;
    draftState.error = null;
    draftState.tasks = draftState.tasks.filter(task => task.id !== Number(id));
  }),

  [ACTION_TYPES.CLOSE_TASK_ERROR]: produce((draftState, action) => {
    draftState.error = null;
  }),
};

function taskReducer (state = initialState, action) {
  const { type } = action;
  const handler = handlers[type];

  if (handler) {
    return handler(state, action);
  }

  return state;
}

export default taskReducer;
