import logo from './logo.svg';
import './App.css';

// TO DO List
// create wordsearch class 
//     Attributes of WORDSEARCH class
//       name, size , alphabet
//     FUNCTIONS FOR WORDSEARCH class
//       Initialize Array of arrays to hold the puzzle "X by X"
//       Add a word to the puzzle (Horizontally, virtically, diagonal Up , Diagonal Down)
//       Delete word
//       Check to make sure words don't conflict
//       Fill in Empty space
//       View completed puzzle 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
