import './App.css';
import Header from './Components/Header/Header';
import MiddleBar from './Components/MiddleBar/MiddleBar';
import ItemsMenu from './Components/ItemsMenu/ItemsMenu';

function App() {
  return (
    <div className="App">
      <Header/>
      <MiddleBar/>
      <ItemsMenu/>
    </div>
  );
}

export default App;
