import { useState } from 'react';
import { useToast } from './ToastProvider';
import { brand } from '../brand';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.title);
  const { showToast } = useToast();

  const handleSave = () => {
    // Atualiza na store e fecha modo edição
    onEdit(task.id, draft);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(task.title);
    setIsEditing(false);
  };

  const handleDelete = () => {
    showToast({
      message: 'Excluir esta tarefa?',
      type: 'info',
      actions: [
        {
          label: 'Excluir',
          variant: 'danger',
          onClick: () => onDelete(task.id),
        },
        {
          label: 'Cancelar',
          variant: 'secondary',
        },
      ],
    });
  };

  return (
    <li style={styles.item}>
      <div style={styles.content}>
        <span style={styles.bullet}>↗</span>
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
              style={{ ...styles.iconButton, color: brand.colors.danger }}
              onClick={handleDelete}
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
    padding: '14px 16px',
    borderRadius: brand.radius.md,
    background: brand.colors.surface,
    border: `1px solid ${brand.colors.border}`,
    boxShadow: brand.shadow.soft,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  bullet: {
    width: 22,
    height: 22,
    borderRadius: brand.radius.pill,
    background: brand.colors.primarySoft,
    color: brand.colors.primaryContrast,
    display: 'grid',
    placeItems: 'center',
    border: `1px solid ${brand.colors.border}`,
    fontWeight: 700,
    fontSize: 11,
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    border: `1px solid ${brand.colors.border}`,
    background: brand.colors.surfaceMuted,
    borderRadius: brand.radius.sm,
    padding: '8px 10px',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 700,
    color: brand.colors.ink,
    boxShadow: brand.shadow.inset,
  },
  save: {
    border: 'none',
    background: brand.colors.primary,
    color: brand.colors.primaryContrast,
    padding: '8px 12px',
    borderRadius: brand.radius.sm,
    cursor: 'pointer',
    fontWeight: 600,
    boxShadow: '0 6px 18px rgba(255, 196, 0, 0.35)',
  },
  cancel: {
    border: `1px solid ${brand.colors.border}`,
    background: brand.colors.surface,
    color: brand.colors.ink,
    padding: '8px 12px',
    borderRadius: brand.radius.sm,
    cursor: 'pointer',
    fontWeight: 600,
  },
  input: {
    flex: 1,
    padding: '10px 12px',
    borderRadius: brand.radius.md,
    border: `1px solid ${brand.colors.border}`,
    fontSize: 15,
    background: brand.colors.surfaceMuted,
    color: brand.colors.ink,
  },
};

export default TaskItem;
