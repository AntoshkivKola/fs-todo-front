import ACTION_TYPES from './actionTypes';
//<<<<<<<<<<<<<<<<<<<<<<<< CREATE >>>>>>>>>>>>>>>>>>>
export const createTaskRequest = ({ values }) => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  payload: { values },
});

export const createTaskSuccess = ({ task }) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  payload: { task },
});

export const createTaskError = ({ error }) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  payload: { error },
});
//<<<<<<<<<<<<<<<<<<<<<<<< GET >>>>>>>>>>>>>>>>>>>>>>>
export const getTaskRequest = () => ({
  type: ACTION_TYPES.GET_TASK_REQUEST,
  // payload: { values },
});

export const getTaskSuccess = ({ tasks }) => ({
  type: ACTION_TYPES.GET_TASK_SUCCESS,
  payload: { tasks },
});

export const getTaskError = ({ error }) => ({
  type: ACTION_TYPES.GET_TASK_ERROR,
  payload: { error },
});
//<<<<<<<<<<<<<<<<<<<<<<<< UPDATE >>>>>>>>>>>>>>>>>>>>>>>
export const updateTaskRequest = ({ id, values }) => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST,
  payload: { id, values },
});

export const updateTaskSuccess = ({ task }) => ({
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  payload: { task },
});

export const updateTaskError = ({ error }) => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  payload: { error },
});

// <<<<<<<<<<<<<<<<<<<<<<<< DELETE >>>>>>>>>>>>>>>>>>>>>>>
export const deleteTaskRequest = ({ id }) => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
  payload: { id },
});

export const deleteTaskSuccess = ({ id }) => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  payload: { id },
});

export const deleteTaskError = ({ error }) => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  payload: { error },
});

export const closeTaskError = () => ({
  type: ACTION_TYPES.CLOSE_TASK_ERROR,
});
