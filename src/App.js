import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <p>React dictionary</p>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer> Coded by Laura Batlle </footer>
    </div>
  );
}

export default App;
