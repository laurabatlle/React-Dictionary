import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>React dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>

        <footer>
          {" "}
          Coded with ❤️ by Laura Batlle{" "}
          <a
            href="https://github.com/laurabatlle/React-Dictionary"
            target="_blank"
            rel="noreferrer"
          >
            open-source code in Github{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
