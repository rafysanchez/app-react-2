import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';
import { brand } from './brand';

const App = () => {
  const title = 'Minha Lista de Tarefas';

  return (
    <div style={styles.page}>
      <div style={styles.shell}>
        <div style={styles.card}>
          <div style={styles.ribbon}>Operação express</div>
          <header style={styles.header}>
            <div style={styles.logoRow}>
              <div style={styles.logoBadge}>
                <div style={styles.logoSun} />
                <div style={styles.logoGlow} />
              </div>
              <div>
                <p style={styles.kicker}>Kit visual inspirado no Mercado Livre</p>
                <h1 style={styles.title}>{title}</h1>
                <p style={styles.subtitle}>
                  Organize entregas rápidas com um visual solar, claro e pronto para crescer.
                </p>
                <div style={styles.pillRow}>
                  <span style={styles.pill}>SLA de hoje</span>
                  <span style={{ ...styles.pill, background: brand.colors.surface, color: brand.colors.ink }}>
                    Visão contínua
                  </span>
                </div>
              </div>
            </div>
          </header>

          <main style={styles.panel}>
            <div style={styles.panelHeader}>
              <div>
                <p style={styles.panelEyebrow}>Fila ativa</p>
                <p style={styles.panelTitle}>Guarde suas entregas e mantenha o fluxo</p>
              </div>
              <TaskCounter label="Tarefas no fluxo" />
            </div>

            <TaskInput placeholder="Adicionar entrega ou pendência" />
            <TaskList />
          </main>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    padding: '56px 16px 72px',
  },
  shell: {
    maxWidth: 960,
    margin: '0 auto',
    position: 'relative',
  },
  card: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: brand.radius.lg,
    padding: '32px 28px 30px',
    background: brand.colors.surface,
    border: `1px solid ${brand.colors.border}`,
    boxShadow: brand.shadow.strong,
    backgroundImage: brand.gradient.card,
  },
  ribbon: {
    position: 'absolute',
    right: 18,
    top: 18,
    padding: '8px 14px',
    borderRadius: brand.radius.pill,
    backgroundImage: brand.gradient.ribbon,
    color: brand.colors.primaryContrast,
    fontWeight: 700,
    letterSpacing: 0.2,
    fontSize: 12,
    boxShadow: brand.shadow.inset,
  },
  header: {
    marginBottom: 24,
  },
  logoRow: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
  },
  logoBadge: {
    width: 72,
    height: 72,
    borderRadius: brand.radius.lg,
    background: brand.colors.surfaceMuted,
    border: `1px solid ${brand.colors.borderStrong}`,
    boxShadow: brand.shadow.soft,
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
  },
  logoSun: {
    width: 42,
    height: 42,
    borderRadius: '50%',
    background: brand.colors.primary,
    border: `6px solid ${brand.colors.surface}`,
    boxShadow: '0 10px 20px rgba(255, 208, 45, 0.35)',
    position: 'relative',
    zIndex: 1,
  },
  logoGlow: {
    position: 'absolute',
    inset: 10,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 208, 45, 0.28), rgba(255, 208, 45, 0))',
    filter: 'blur(4px)',
  },
  kicker: {
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    fontSize: 12,
    color: brand.colors.accent,
    fontWeight: 700,
  },
  title: {
    margin: '6px 0 8px',
    fontSize: 32,
    color: brand.colors.ink,
    fontFamily: brand.font.accent,
    letterSpacing: -0.4,
  },
  subtitle: {
    margin: 0,
    color: brand.colors.inkSubtle,
    maxWidth: 720,
  },
  pillRow: {
    display: 'flex',
    gap: 8,
    marginTop: 12,
  },
  pill: {
    padding: '8px 12px',
    borderRadius: brand.radius.pill,
    background: brand.colors.primarySoft,
    color: brand.colors.primaryContrast,
    border: `1px solid ${brand.colors.border}`,
    fontWeight: 600,
    fontSize: 13,
  },
  panel: {
    marginTop: 14,
    borderRadius: brand.radius.md,
    padding: '18px 16px 8px',
    background: brand.colors.surface,
    border: `1px solid ${brand.colors.border}`,
    boxShadow: brand.shadow.soft,
  },
  panelHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 12,
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  panelEyebrow: {
    textTransform: 'uppercase',
    fontSize: 11,
    letterSpacing: 1,
    color: brand.colors.accent,
    margin: 0,
  },
  panelTitle: {
    margin: '2px 0 0',
    color: brand.colors.ink,
    fontWeight: 600,
  },
};

export default App;
