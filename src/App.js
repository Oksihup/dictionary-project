import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a></a>
        </header>
        <Dictionary defaultKeyword="peace" />
        <footer className="App-footer">
          This project was coded by <a>SheCodes</a> and is{" "}
          <a>open-sourced on Github</a> <a>hosted on Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
