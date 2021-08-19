import './App.css';
import LenthWithForm from './components/LenthWithForm/LenthWithForm';
import MainPage from './components/MainPage/MainPage';
import {useSelector} from 'react-redux';
import {appSelector} from './redux/appReducer';

function App() {

  const {condition} = useSelector(appSelector);

  return (
    <div className="App">
      {condition === 'MainPage' ? <MainPage /> : null}
      {condition === 'LenthWithForm' ? <LenthWithForm /> : null}     
    </div>
  );
}

export default App;
