import React, { useState } from 'react';

const App: React.FC = () => {
  // Estado para a contagem
  const [count, setCount] = useState<number>(0);

  // Função para incrementar a contagem
  const increment = () => {
    setCount(count + 1);
  };

  // Função para decrementar a contagem
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contagem: {count}</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={increment}>Incrementar</button>
        <button style={styles.button} onClick={decrement}>Decrementar</button>
      </div>
    </div>
  );
};

// Estilos em linha
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    color: '#333',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default App;
