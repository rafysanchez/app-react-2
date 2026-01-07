import TaskItem from './TaskItem';
import { useTaskStore } from '../store/useTaskStore';

const TaskList = () => {
  const { tasks, updateTask, deleteTask } = useTaskStore((state) => ({
    tasks: state.tasks,
    updateTask: state.updateTask,
    deleteTask: state.deleteTask,
  }));

  if (!tasks.length) {
    return <p style={styles.empty}>Nenhuma tarefa adicionada ainda.</p>;
  }

  return (
    // Passamos callbacks como props para cada item
    <ul style={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={updateTask}
          onDelete={deleteTask}
        />
      ))}
    </ul>
  );
};

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '12px 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  empty: {
    marginTop: 12,
    color: '#475569',
  },
};

export default TaskList;
