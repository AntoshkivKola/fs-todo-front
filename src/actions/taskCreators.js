import ACTION_TYPES from './actionTypes';

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

export const updateTask = ({ id, values }) => ({
  type: ACTION_TYPES.UPDATE_TASK,
  id,
  values,
});

export const deleteTask = id => ({
  type: ACTION_TYPES.DELETE_TASK,
  id,
});
