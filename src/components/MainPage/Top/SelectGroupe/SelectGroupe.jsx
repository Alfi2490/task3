import './SelectGroupe.css';
import CountryList from './Country/Country';
import Selector from './Selector/Selerctor';
import Dates from './Dates/Dates';
import TypeList from './Type/Type';
import { useSelector, useDispatch } from 'react-redux';
import { mainPageTopSelector, setCondition } from '../../../../redux/mainPageTopReduser';

function SelectGroupe() {

    const { condition, Country, Type } = useSelector(mainPageTopSelector);

    const dispatch = useDispatch();

    function handleChangeCondition (str) {

        if (condition === str) {
            dispatch(setCondition(''));
            return
        }

        dispatch(setCondition(str));

    }

    return <div className={condition === '' ? 'SelectGroupe' : 'SelectGroupeBig'}>

        <Selector 
            onChangeCondition={handleChangeCondition} 
            condition="Country" 
            value={Country}
            />
        <Selector 
            onChangeCondition={handleChangeCondition} 
            condition="Dates"
            value="Dates"
            />
        <Selector 
            onChangeCondition={handleChangeCondition} 
            condition="Type"
            value={Type}
            />

        {condition === 'Country' && <ul>
            <CountryList onChangeCondition={handleChangeCondition} /></ul>}
        {condition === 'Type' && <ul>
            <TypeList onChangeCondition={handleChangeCondition} /></ul>}

        {condition === 'Dates' && <Dates onChangeCondition={handleChangeCondition} />}
        
    </div>
}

export default SelectGroupe;