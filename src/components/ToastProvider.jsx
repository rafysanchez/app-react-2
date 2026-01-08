import { createContext, useCallback, useContext, useState } from 'react';
import { brand } from '../brand';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    ({ message, type = 'info', duration = 4000, actions }) => {
      const id =
        crypto.randomUUID && typeof crypto.randomUUID === 'function'
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random()}`;

      const toast = { id, message, type, actions };
      setToasts((prev) => [...prev, toast]);

      // Auto fecha apenas toasts informativos; confirm/toast com ação
      // fica aberto até a escolha do usuário.
      if (!actions?.length) {
        setTimeout(() => dismissToast(id), duration);
      }

      return id;
    },
    [dismissToast]
  );

  const value = { showToast, dismissToast };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div style={styles.container}>
        {toasts.map((toast) => {
          const isError = toast.type === 'error';
          return (
            <div
              key={toast.id}
              style={{ ...styles.toast, ...(isError ? styles.error : styles.info) }}
            >
              <div style={styles.message}>{toast.message}</div>
              {toast.actions?.length ? (
                <div style={styles.actionRow}>
                  {toast.actions.map((action) => (
                    <button
                      key={action.label}
                      style={{
                        ...styles.actionButton,
                        ...(action.variant === 'danger' ? styles.dangerButton : {}),
                        ...(action.variant === 'secondary' ? styles.secondaryButton : {}),
                      }}
                      onClick={() => {
                        action.onClick?.();
                        dismissToast(toast.id);
                      }}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              ) : (
                <button
                  style={styles.close}
                  onClick={() => dismissToast(toast.id)}
                  aria-label="Fechar aviso"
                >
                  ×
                </button>
              )}
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used inside a ToastProvider');
  }
  return ctx;
};

const styles = {
  container: {
    position: 'fixed',
    top: 20,
    right: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 'min(420px, 94vw)',
    zIndex: 1000,
  },
  toast: {
    position: 'relative',
    borderRadius: brand.radius.md,
    padding: '14px 16px',
    boxShadow: brand.shadow.soft,
    color: brand.colors.ink,
    border: `1px solid ${brand.colors.border}`,
    background: brand.colors.surface,
    overflow: 'hidden',
  },
  info: {
    borderColor: brand.colors.borderStrong,
    background: brand.colors.primarySoft,
  },
  error: {
    borderColor: brand.colors.danger,
    background: '#fff1f2',
  },
  message: {
    fontSize: 15,
    marginBottom: 12,
  },
  actionRow: {
    display: 'flex',
    gap: 8,
    justifyContent: 'flex-end',
  },
  actionButton: {
    border: `1px solid ${brand.colors.border}`,
    background: brand.colors.surface,
    color: brand.colors.ink,
    padding: '8px 12px',
    borderRadius: brand.radius.sm,
    cursor: 'pointer',
    fontWeight: 600,
  },
  dangerButton: {
    background: brand.colors.danger,
    color: '#fff',
    borderColor: brand.colors.danger,
  },
  secondaryButton: {
    background: brand.colors.surfaceMuted,
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: 18,
    color: brand.colors.inkSubtle,
  },
};
