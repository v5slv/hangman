import { useState } from 'react';
import { Intro } from './components/intro/Intro';
import { Keyboard } from './components/keyboard/Keyboard';
import { Word } from './components/word/Word';
import { Hangman } from './components/hangman/Hangman';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className="intro-hangman">
          <Intro />
          <Hangman />
        </div>
        <Word />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Keyboard />
    </div>
  )
};

export default App;
