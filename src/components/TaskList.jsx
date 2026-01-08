import TaskItem from './TaskItem';
import { useTaskStore } from '../store/useTaskStore';
import { brand } from '../brand';

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
    margin: '10px 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  empty: {
    marginTop: 14,
    color: brand.colors.inkSubtle,
    background: brand.colors.surfaceMuted,
    padding: '12px 14px',
    borderRadius: brand.radius.md,
    border: `1px dashed ${brand.colors.border}`,
  },
};

export default TaskList;
