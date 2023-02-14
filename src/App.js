import './App.css';
import './Content.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  let name = 'ROMAN';
  let testList = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
