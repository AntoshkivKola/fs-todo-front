import { useEffect } from 'react';
import { connect } from 'react-redux';
// import * as TaskActionCreators from '../actions/taskCreators';

const TaskList = props => {
  const { tasks, isFetching, error } = props;
  return (
    <section>
      <h1>Task List</h1>
      {isFetching && 'LOADING...'}
      {error && JSON.stringify(error)}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.body}</span>
            <input type="checkbox" checked={task.isDone} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = ({ task }) => task;

export default connect(mapStateToProps)(TaskList);
