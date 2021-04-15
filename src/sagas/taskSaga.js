import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as TaskActionCreator from '../actions/taskCreators';

export function * createTaskSaga (action) {
  try {
    const {
      data: {
        data: [task],
      },
    } = yield API.createTask(action.payload.values);
    yield put(TaskActionCreator.createTaskSuccess({ task }));
  } catch (error) {
    yield put(
      TaskActionCreator.createTaskError({
        error: error.response.data.errors[0],
      })
    );
  }
}

export function * getTasksSaga (action) {
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks();

    yield put(TaskActionCreator.getTaskSuccess({ tasks }));
  } catch (error) {
    yield put(TaskActionCreator.getTaskError({ error }));
  }
}

export function * updateTaskSaga (action) {
  try {
    const { id, values } = action.payload;

    const {
      data: {
        data: [task],
      },
    } = yield API.updateTask({ id, values });
    yield put(TaskActionCreator.updateTaskSuccess({ task }));
  } catch (error) {
    yield put(TaskActionCreator.updateTaskError({ error }));
  }
}

export function * deleteTaskSaga (action) {
  try {
    const { id } = action.payload;

    yield API.deleteTask({ id });
    yield put(TaskActionCreator.deleteTaskSuccess({ id }));
  } catch (error) {
    yield put(TaskActionCreator.deleteTaskError({ error }));
  }
}
