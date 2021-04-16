import { connect } from 'react-redux';
import { format, parseISO } from 'date-fns';
import * as TaskActionCreators from '../../actions/taskCreators';
import styles from './TaskItem.module.scss';

const TaskItem = props => {
  const { updateTaskRequstAction, deleteTaskRequstAction, task } = props;

  const onChange = id => ({ target: { checked } }) => {
    updateTaskRequstAction(id, { isDone: checked });
  };

  const deleteTask = id => () => {
    deleteTaskRequstAction(id);
  };

  return (
    <li className={styles.item}>
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
  );
};

const mapStateToProps = ({ task }) => task;
const mapDispatchToProps = dispatch => ({
  updateTaskRequstAction: (id, values) =>
    dispatch(TaskActionCreators.updateTaskRequest({ id, values })),
  deleteTaskRequstAction: id =>
    dispatch(TaskActionCreators.deleteTaskRequest({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
