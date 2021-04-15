import { useEffect } from 'react';
import { connect } from 'react-redux';
import { format, parseISO } from 'date-fns';
import * as TaskActionCreators from '../../actions/taskCreators';
import styles from './TaskList.module.scss';

const TaskList = props => {
  const {
    tasks,
    isFetching,
    error,
    getTaskRequstAction,
    updateTaskRequstAction,
    deleteTaskRequstAction,
    closeTaskErrorAction,
  } = props;

  const onChange = id => ({ target: { checked } }) => {
    updateTaskRequstAction(id, { isDone: checked });
  };

  const deleteTask = id => () => {
    deleteTaskRequstAction(id);
  };

  useEffect(() => {
    getTaskRequstAction();
  }, []);

  tasks.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <section className={styles.listSection}>
      <h1 className={styles.listTitle}>Task List</h1>
      {isFetching && <span className={styles.loading}> LOADING... </span>}
      {error && (
        <div className={styles.error}>
          <span>Error! {error.message}</span>
          <button className={styles.deleteBtn} onClick={closeTaskErrorAction}>X</button>
        </div>
      )}
      <ul className={styles.list}>
        {tasks.map(task => (
          <li className={styles.item} key={task.id}>
            <h3 className={styles.id}>{task.id}.</h3>

            <input
              className={styles.isDone}
              type='checkbox'
              checked={task.isDone}
              onChange={onChange(task.id)}
            />

            <span className={styles.body}>{task.body}</span>
            <span className={styles.deadline}>
              {task.deadline
                ? format(parseISO(task.deadline), "yyyy-MM-dd' 'HH:mm:ss")
                : '-'}
            </span>

            <button className={styles.deleteBtn} onClick={deleteTask(task.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = ({ task }) => task;
const mapDispatchToProps = dispatch => ({
  getTaskRequstAction: () => dispatch(TaskActionCreators.getTaskRequest()),
  updateTaskRequstAction: (id, values) =>
    dispatch(TaskActionCreators.updateTaskRequest({ id, values })),
  deleteTaskRequstAction: id =>
    dispatch(TaskActionCreators.deleteTaskRequest({ id })),
  closeTaskErrorAction: () => dispatch(TaskActionCreators.closeTaskError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
