import { useState } from 'react';
import { useTaskStore } from '../store/useTaskStore';
import { brand } from '../brand';

const TaskInput = ({ placeholder = 'Nova tarefa' }) => {
  const [text, setText] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleAdd = () => {
    if (!text.trim()) return;
    addTask(text);
    setText('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div style={styles.wrapper}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        style={styles.input}
        onKeyDown={handleKeyDown}
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
    gap: 12,
    marginBottom: 14,
    padding: '12px 12px 12px 14px',
    borderRadius: brand.radius.md,
    background: brand.colors.surfaceMuted,
    border: `1px solid ${brand.colors.border}`,
    boxShadow: brand.shadow.soft,
  },
  input: {
    flex: 1,
    padding: '12px 14px',
    borderRadius: brand.radius.md,
    border: `1px solid ${brand.colors.border}`,
    outline: 'none',
    fontSize: 15,
    background: brand.colors.surface,
    color: brand.colors.ink,
    boxShadow: brand.shadow.inset,
  },
  button: {
    padding: '12px 18px',
    borderRadius: brand.radius.md,
    border: 'none',
    background: `linear-gradient(120deg, ${brand.colors.primaryStrong}, ${brand.colors.primary})`,
    color: brand.colors.primaryContrast,
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(255, 196, 0, 0.35)',
  },
};

export default TaskInput;
