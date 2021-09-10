import './Bottom.css'
import jorney from './jorney.jpg';
import { useDispatch } from 'react-redux';
import { changeCondition } from '../../../redux/appReducer';

function Bottom() {

  const dispatch = useDispatch();

    return (
      <div className="MainPageButtom">

        <div className="LeftBlock">
          <h2>All the World.</h2>
          <h1>Holidays in the May</h1>
          <p>
          <span className="Line"></span>
            Holidays in the May - this is good occassion to go to vacation!
            Roads for any taste in Russia and all the World. Author ways in the
            Israel, Belarus, Madagascar. Ways in the Turkey, Georgia, Italy.
            Find the trip as you like!
          </p>

          <button className="GoButton" onClick={() => dispatch(changeCondition('LenthWithForm'))}>Go! <span>{String.fromCharCode(62)}</span></button>

          <h3 onClick={() => dispatch(changeCondition('LenthWithForm'))}>{String.fromCharCode(60)} going to the rocket launch</h3>

        </div>

        <img src={jorney} alt="JORNEY" className="Jorney" />

      </div>
    );
}

export default Bottom;