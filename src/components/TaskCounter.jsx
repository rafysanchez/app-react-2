import { useTaskStore } from '../store/useTaskStore';

const TaskCounter = ({ label = 'Total de tarefas' }) => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    // Apenas lê o estado global para exibir a contagem
    <div style={styles.counter}>
      {label}: <strong>{tasks.length}</strong>
    </div>
  );
};

const styles = {
  counter: {
    marginTop: 8,
    marginBottom: 8,
    color: '#0f172a',
  },
};

export default TaskCounter;
