import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as TaskActionCreators from '../../actions/taskCreators';
import styles from './TaskList.module.scss';
import TaskItem from '../TaskItem';
import TaskError from '../TaskError';
import TaskLoading from '../TaskLoading';

const TaskList = props => {
  const { tasks, isFetching, error, getTaskRequstAction } = props;

  useEffect(() => {
    getTaskRequstAction({ limit: 5, offset: 0 });
  }, []);

  const loadMore = () => {
    getTaskRequstAction({ limit: 5, offset: tasks.length });
  };

  tasks.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <section className={styles.listSection}>
      <h1 className={styles.listTitle}>Task List</h1>
      {isFetching && <TaskLoading />}
      {error && <TaskError error={error} />}
      <ul className={styles.list}>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <button onClick={loadMore} className={styles.loadMore}>
        Load more tasks
      </button>
    </section>
  );
};

const mapStateToProps = ({ task }) => task;
const mapDispatchToProps = dispatch => ({
  getTaskRequstAction: ({ limit, offset }) =>
    dispatch(TaskActionCreators.getTaskRequest({ limit, offset })),

  closeTaskErrorAction: () => dispatch(TaskActionCreators.closeTaskError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
