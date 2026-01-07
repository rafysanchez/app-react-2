import { useState } from 'react';
import { useTaskStore } from '../store/useTaskStore';

const TaskInput = ({ placeholder = 'Nova tarefa' }) => {
  const [text, setText] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleAdd = () => {
    // Envia para a store global e limpa o campo
    addTask(text);
    setText('');
  };

  return (
    <div style={styles.wrapper}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        style={styles.input}
      />
      <button onClick={handleAdd} style={styles.button}>
        Adicionar
      </button>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    gap: 8,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #cbd5e1',
    outline: 'none',
    fontSize: 15,
  },
  button: {
    padding: '10px 14px',
    borderRadius: 8,
    border: 'none',
    background: '#2563eb',
    color: '#fff',
    fontWeight: 600,
    cursor: 'pointer',
  },
};

export default TaskInput;
