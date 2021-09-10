import './SelectGroupe.css';
import Country from './Country/Country';
import Selector from './Selector/Selerctor';
import Dates from './Dates/Dates';
import Type from './Type/Type';
import { useSelector, useDispatch } from 'react-redux';
import { mainPageTopSelector, setCondition } from '../../../../redux/mainPageTopReduser';

function SelectGroupe(props) {

    const filter = props.filter;

    const { condition } = useSelector(mainPageTopSelector);

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
            value={filter.Country} 
            />
        <Selector 
            onChangeCondition={handleChangeCondition} 
            condition="Dates" 
            value={filter.Dates.From} />
        <Selector 
            onChangeCondition={handleChangeCondition} 
            condition="Type" 
            value={filter.Type} />

        {condition === 'Country' && <ul>
            <Country 
                countries={props.countries} 
                setCountry={props.onSetFilter}
                onChangeCondition={handleChangeCondition} />
            </ul>}
        {condition === 'Type' && <ul>
            <Type 
                types={props.types}
                setType={props.onSetFilter}
                onChangeCondition={handleChangeCondition}
            /></ul>}

        {condition === 'Dates' && 
            <Dates 
                dateFrom={props.dateFrom}
                dateTo={props.dateTo}
                setDateFrom={props.setDateFrom}
                setDateTo={props.setDateTo}
                setDate={props.onSetFilter} 
                onChangeCondition={handleChangeCondition} />}
        
    </div>
}

export default SelectGroupe;