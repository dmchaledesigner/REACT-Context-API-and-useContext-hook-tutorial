import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MyCounter from './components/MyCounter';

// import context Provider
import CounterContextProvider from './components/contexts/CounterContext';

function App() {


  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Context API</h2>

      <CounterContextProvider>
        <MyCounter />
      </CounterContextProvider>



    </div>
  );
}

export default App;
