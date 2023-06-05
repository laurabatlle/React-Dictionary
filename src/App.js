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
      <footer>
        {" "}
        Coded with ❤️ by Laura Batlle{" "}
        <a
          href="https://github.com/laurabatlle/React-Dictionary"
          target="_blank"
        >
          open-source code in Github{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
