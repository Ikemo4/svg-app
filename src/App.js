import logo from './logo.svg';
import plainMultiple from './plain-multiple.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div
          style={{
            height: '200px',
            width: '200px',
            backgroundColor: 'transparent',
            backgroundRepeat: 'no-repeat',
            alignItems: 'center',
            backgroundImage: `url(${plainMultiple})`
          }}
        >Boop</div>
      </header>
    </div>
  );
}

export default App;
