// import logo from './logo.svg';
import { ReactComponent as Logo } from "./logo.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo style={{ height: 400 }} />
        <h1>Welcome   to my first react app test </h1>
      </header>
    </div>
  );
}

export default App;
