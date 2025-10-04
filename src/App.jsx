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
    // Primeiro adiciona 1 ao contador usando addOne
    addOne();

    // Verifica se o valor ATUAL (antes de adicionar 1) é divisível por 5
    // Se for, adiciona 100 adicionais
    if (count % 5 === 0) {
      // Se for divisível por 5, adiciona 100
      add100();
    }
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
