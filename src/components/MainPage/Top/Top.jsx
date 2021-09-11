import './Top.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../redux/appReducer';
import SelectGroupe from './SelectGroupe/SelectGroupe';
import { mainPageTopSelector } from '../../../redux/mainPageTopReduser';
import { useHistory } from 'react-router-dom';

function Top() {

    const dispatch = useDispatch();
    const { Country, Type, dates } = useSelector(mainPageTopSelector);
    const filter = {
        Country: Country === 'Country' ? '' : Country, 
        Type: Type === 'Type' ? '' : Type,
        Dates: dates
    };

    let history = useHistory();
    
    return (
      <div className="MainPageTop">

        <div className="MainPageFilteer">
          <button
            onClick={() => {
              history.push('/lenth');
              dispatch(setFilter(filter));
            }}
          >
            Apply
          </button>

          <SelectGroupe />

          <p>
            We have many opportunities for proposing new jorneys 
            and make you happy!
          </p>

        </div>
      </div>
    );
}

export default Top;