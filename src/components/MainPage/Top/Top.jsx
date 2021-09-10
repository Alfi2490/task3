import './Top.css';
import Header from '../../LenthWithForm/Header/Header';
import { useDispatch } from 'react-redux';
import { changeCondition } from '../../../redux/appReducer';
import SelectGroupe from './SelectGroupe/SelectGroupe';
import { useState } from 'react';

function Top(props) {

    const [filter, setFilter] = useState({Country:'Country', Type: 'Type', Dates: {From: '' , To: ''}});
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());

    function handleSetFilter (type, value) {
        let {...tmp} = filter;
        if(type === 'Country') {
            tmp.Country = value;
        };
        if(type === 'Type') {
            tmp.Type = value;
        };
        setFilter(tmp);        
    };

    const dispatch = useDispatch();
    
    return <div className="MainPageTop">

        <Header noBackground />

        <div className="MainPageFilteer" >

            <button onClick={() => {
                dispatch(changeCondition('LenthWithForm'));
                }}>Apply</button>

            <SelectGroupe 
                {...props} 
                filter={filter} 
                onSetFilter={handleSetFilter}
                dateFrom={dateFrom} 
                dateTo={dateTo} 
                setDateFrom={setDateFrom}
                setDateTo={setDateTo} />

            <p>We have many opportunities for proposing new jorneys and make you happy!</p>

        </div>
        
    </div>
}

export default Top;