import './App.css';
import MyGodotGame from './components/MyGodotGame';
import useTest from './hooks/useTest';

const App = () => {

  const {opponentName, error} = useTest();
  return <div>
    <div>Game Component against model: {error ? "NOT VALID" : opponentName}</div>
    <MyGodotGame />
  </div>
}

export default App;
