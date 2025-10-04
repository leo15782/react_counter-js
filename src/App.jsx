import { useState } from 'react';
import './App.scss';

export const App = () => {
  // Estado que armazena o valor atual do contador, inicializado com 0
  const [count, setCount] = useState(0);

  // Função que adiciona 1 ao contador atual
  const addOne = () => {
    // Atualiza o estado usando a função setCount, incrementando o valor atual em 1
    setCount(prevCount => prevCount + 1);
  };

  // Função que adiciona 100 ao contador atual
  const add100 = () => {
    // Atualiza o estado usando a função setCount, incrementando o valor atual em 100
    setCount(prevCount => prevCount + 100);
  };

  // Função complexa que primeiro adiciona 1, depois verifica se é divisível por 5
  const increase = () => {
    // Usa atualização funcional para garantir atomicidade e evitar race conditions
    setCount(prev => {
      // Primeiro adiciona 1 (equivale a chamar addOne)
      let newValue = prev + 1;

      // Depois verifica se o valor ORIGINAL era divisível por 5
      // Se for, adiciona mais 100 (equivale a chamar add100)
      if (prev % 5 === 0) {
        newValue += 100;
      }

      return newValue;
    });
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
