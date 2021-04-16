import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function taskReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { task: newTask },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: [...tasks, newTask],
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: error.response.data.errors[0],
      };
    }
    //
    case ACTION_TYPES.GET_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_TASK_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { tasks: newTasks },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: [...tasks, ...newTasks],
      };
    }
    case ACTION_TYPES.GET_TASK_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: error.response.data.errors[0],
      };
    }
    //
    case ACTION_TYPES.UPDATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.UPDATE_TASK_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { task: updateTask },
      } = action;

      const updateTaskIndex = tasks.findIndex(({ id }) => id === updateTask.id);
      tasks[updateTaskIndex].isDone = updateTask.isDone;

      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: [...tasks],
      };
    }
    case ACTION_TYPES.UPDATE_TASK_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: error.response.data.errors[0],
      };
    }
    //
    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.DELETE_TASK_SUCCESS: {
      const { tasks } = state;
      const {
        payload: { id },
      } = action;

      return {
        ...state,
        isFetching: false,
        error: null,
        tasks: tasks.filter(task => task.id !== id),
      };
    }
    case ACTION_TYPES.DELETE_TASK_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error: error.response.data.errors[0],
      };
    }
    //
    case ACTION_TYPES.CLOSE_TASK_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    default: {
      return state;
    }
  }
}

export default taskReducer;
