import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';

const App = () => {
  const title = 'Minha Lista de Tarefas';

  return (
    <div style={styles.container}>
      {/* App só organiza a tela; estado global fica na store */}
      <h1 style={styles.title}>{title}</h1>
      {/* Passamos props simples para demonstrar uso */}
      <TaskInput placeholder="Adicione uma tarefa" />
      <TaskCounter label="Total de tarefas" />
      <TaskList />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 480,
    margin: '40px auto',
    padding: '24px',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    background: '#f8fafc',
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
    fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif',
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    color: '#c93420ff',
  },
};

export default App;
