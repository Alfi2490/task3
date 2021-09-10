import './Top.css';
import Header from '../../LenthWithForm/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { changeCondition, setFilter } from '../../../redux/appReducer';
import SelectGroupe from './SelectGroupe/SelectGroupe';
import { mainPageTopSelector } from '../../../redux/mainPageTopReduser';

function Top() {

    const dispatch = useDispatch();
    const { Country, Type, dateFrom, dateTo } = useSelector(mainPageTopSelector);
    const filter = {Country: Country, Type: Type, Dates: {From: dateFrom, To: dateTo}};
    
    return <div className="MainPageTop">

        <Header noBackground />

        <div className="MainPageFilteer" >

            <button onClick={() => {
                dispatch(changeCondition('LenthWithForm'));
                dispatch(setFilter(filter));
                }}>Apply</button>

            <SelectGroupe />

            <p>We have many opportunities for proposing new jorneys and make you happy!</p>

        </div>
        
    </div>
}

export default Top;