import './App.css';
import UnityComponent from './components/UnityComponent';
import useTest from './hooks/useTest';

const App = () => {

  const {opponentName, error} = useTest();
  return <div>
    <div style={{height: "4.65vh", backgroundColor: "red"}}>Game Component against model: {error ? "NOT VALID" : opponentName}</div>
    <div style={{margin: "1%", height: "91vh"}}>
      <UnityComponent gameName="hedron" gameSize={{ width: '100%', height: '100%' }} />
    </div>
  </div>
}

export default App;
