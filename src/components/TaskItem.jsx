import { useState } from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.title);

  const handleSave = () => {
    // Atualiza na store e fecha modo edição
    onEdit(task.id, draft);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(task.title);
    setIsEditing(false);
  };

  return (
    <li style={styles.item}>
      <div style={styles.content}>
        <span style={styles.bullet}>•</span>
        {isEditing ? (
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            style={styles.input}
            autoFocus
          />
        ) : (
          <span>{task.title}</span>
        )}
      </div>
      <div style={styles.actions}>
        {isEditing ? (
          <>
            <button style={styles.save} onClick={handleSave}>
              Salvar
            </button>
            <button style={styles.cancel} onClick={handleCancel}>
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button
              style={styles.iconButton}
              onClick={() => setIsEditing(true)}
              title="Editar"
            >
              ✏️
            </button>
            <button
              style={{ ...styles.iconButton, color: '#dc2626' }}
              onClick={() => onDelete(task.id)}
              title="Excluir"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </li>
  );
};

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    padding: '10px 12px',
    borderRadius: 10,
    background: '#fff',
    border: '1px solid #e2e8f0',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  bullet: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    border: '1px solid #cbd5e1',
    background: '#f8fafc',
    borderRadius: 8,
    padding: '6px 8px',
    cursor: 'pointer',
    fontSize: 16,
  },
  save: {
    border: 'none',
    background: '#16a34a',
    color: '#fff',
    padding: '6px 10px',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 600,
  },
  cancel: {
    border: '1px solid #cbd5e1',
    background: '#fff',
    color: '#0f172a',
    padding: '6px 10px',
    borderRadius: 8,
    cursor: 'pointer',
  },
  input: {
    flex: 1,
    padding: '8px 10px',
    borderRadius: 8,
    border: '1px solid #cbd5e1',
    fontSize: 15,
  },
};

export default TaskItem;
