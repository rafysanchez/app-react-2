import { useTaskStore } from '../store/useTaskStore';
import { brand } from '../brand';

const TaskCounter = ({ label = 'Total de tarefas' }) => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div style={styles.counter}>
      <span style={styles.label}>{label}</span>
      <span style={styles.value}>{tasks.length}</span>
    </div>
  );
};

const styles = {
  counter: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 14px',
    borderRadius: brand.radius.pill,
    background: brand.colors.surfaceMuted,
    border: `1px solid ${brand.colors.border}`,
    boxShadow: brand.shadow.inset,
  },
  label: {
    fontSize: 13,
    color: brand.colors.inkSubtle,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 34,
    height: 30,
    padding: '0 10px',
    borderRadius: brand.radius.pill,
    background: brand.colors.primary,
    color: brand.colors.primaryContrast,
    fontWeight: 800,
    border: `1px solid ${brand.colors.borderStrong}`,
    boxShadow: '0 8px 24px rgba(255, 196, 0, 0.32)',
  },
};

export default TaskCounter;
