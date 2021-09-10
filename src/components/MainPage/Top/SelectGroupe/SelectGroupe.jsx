import './SelectGroupe.css';
import { useState } from 'react';
import Country from './Country/Country';
import Selector from './Selector/Selerctor';
import Dates from './Dates/Dates';
import Type from './Type/Type';

function SelectGroupe(props) {

    const filter = props.filter;

    const [condition, setCondition] = useState('');

    function handleChangeCondition (str) {

        if (condition === str) {
            setCondition('');
            return
        }

        setCondition(str);

    }

    return <div className={condition === '' ? 'SelectGroupe' : 'SelectGroupeBig'}>

        <Selector 
            onChangeCondition={handleChangeCondition} 
            condition="Country" 
            currentState={condition}
            value={filter.Country} 
            />
        <Selector 
            onChangeCondition={handleChangeCondition} 
            condition="Dates" 
            currentState={condition}
            value={filter.Dates.From} />
        <Selector 
            onChangeCondition={handleChangeCondition} 
            condition="Type" 
            currentState={condition}
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