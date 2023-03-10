
import { Intro } from './components/intro/Intro';
import { Keyboard } from './components/keyboard/Keyboard';
import { Word } from './components/word/Word';
import { Hangman } from './components/hangman/Hangman';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="intro-hangman">
          <Intro />
          <Hangman />
        </div>
        <Word />
        <Keyboard />
    </div>
  )
};

export default App;
