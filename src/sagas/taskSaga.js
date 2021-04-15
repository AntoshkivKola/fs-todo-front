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
    // yield put(TaskActionCreator.createTaskError({ error }));
  }
}
