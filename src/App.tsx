import React, { useState } from 'react';

// Componente para gerar um número aleatório
const RandomNumberGenerator: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; // Gera número entre 1 e 100
    setRandomNumber(number);
  };

  return (
    <div>
      <button onClick={generateRandomNumber}>Gerar Número Aleatório</button>
      {randomNumber !== null && <p>O número aleatório é: {randomNumber}</p>}
    </div>
  );
};

// Componente principal App
const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Bem-vindo ao Gerador de Números Aleatórios!</h1>
      <RandomNumberGenerator />
    </div>
  );
};

export default App;
