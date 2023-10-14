import './App.css';
import UnityComponent from './components/UnityComponent';
import useTest from './hooks/useTest';

const App = () => {

  const {opponentName, error} = useTest();
  return <div>
    <div>Game Component against model: {error ? "NOT VALID" : opponentName}</div>
    <UnityComponent gameName="hedron" gameSize={{ width: '90vw', height: '90vh' }} />
  </div>
}

export default App;
