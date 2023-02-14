import './App.css';

function App() {
  let name = 'ROMAN';
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <p>Hello { name } this is your first semi-dynamic react component</p>
      </div>
    </div>
  );
}

export default App;
