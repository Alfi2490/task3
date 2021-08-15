import './App.css';
import Header from './components/Header/Header';
import BLOCK_1 from './components/Block_1/Block_1';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
        <Header />
        <h1>Country</h1>
        <BLOCK_1 />
        <h1>Application for selection of travel</h1>
        < Form/>
    </div>
  );
}

export default App;
