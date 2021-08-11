import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import MyCounter from './components/MyCounter';
import ComponentA from './components/ComponentA';

// import context Provider
import CounterContextProvider from './components/contexts/CounterContext';
import ComponentB from './components/ComponentB';


function App() {


  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Context API</h2>

      {/* My counter is a child of the Provider so anything inside will hold the useContext state hook*/}
      <CounterContextProvider>
        <MyCounter />
        <ComponentA />
        <ComponentB />
      </CounterContextProvider>



    </div>
  );
}

export default App;
