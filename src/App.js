import TaskForm from './components/TaskForm';
import TaskLins from './components/TaskList';
import styles from './App.module.scss';

function App () {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <TaskForm />
        <hr />
        <hr />
        <TaskLins />
      </div>
    </div>
  );
}

export default App;
