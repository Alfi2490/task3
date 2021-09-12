import './App.css';
import LenthWithForm from './components/LenthWithForm/LenthWithForm';
import MainPage from './components/MainPage/MainPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminPage from './components/AdminPage/AdminPage';


function App() {

  return (
    <div className="App">

      <Switch>

        <Route path="/" exact component={MainPage} />

        <Route path="/lenth" component={LenthWithForm} />

        <Route path="/admin" component={AdminPage} />

        <Redirect from="**" to="/" />

      </Switch>

    </div>
  );
}

export default App;
