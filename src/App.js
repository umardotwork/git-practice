import logo from "./logo.svg";
import "./App.css";
import Hello from "./HelloPeeps";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Hello />
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
            Learn React JS
          </a>
        </header>
      </div>
      <NotFound />
    </>
  );
}

export default App;
