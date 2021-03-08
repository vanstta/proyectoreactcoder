import logo from './logo.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p >
         Caleón Estudio
        </p>
        <a 
          className="App-link"
          href="https://instagram.com/caleonestudio?igshid=ne8hn9akptwx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Seguinos en nuestras redes
        </a>
      </header>
    </div>
  );
}

export default App;
