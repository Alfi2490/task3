import './Bottom.css'
import { useHistory } from 'react-router-dom';

function Bottom() {

  let history = useHistory();

    return (
      <div className="MainPageButtom">

        <div className="LeftBlock">
          <h2>All the World.</h2>
          <h1>Holidays in the May</h1>

          <div className="Text">
            <div className="Line"></div>
            <p>
            Holidays in the May - this is good occassion to go to vacation!
            Roads for any taste in Russia and all the World. Author ways in the
            Israel, Belarus, Madagascar. Ways in the Turkey, Georgia, Italy.
            Find the trip as you like!
            </p>
          </div>

          <button className="GoButton" onClick={() => history.push('/lenth')}>Go! <span>{String.fromCharCode(62)}</span></button>

          <h3 onClick={() => history.push('/lenth')}>{String.fromCharCode(60)} going to the rocket launch</h3>

        </div>

        <img src="https://firebasestorage.googleapis.com/v0/b/test3-d2998.appspot.com/o/jorney.jpg?alt=media&token=5a8dcfe5-d375-4473-88bb-2bd4c2e8d209" alt="JORNEY" className="Jorney" />

      </div>
    );
}

export default Bottom;