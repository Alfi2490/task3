import { useSelector, useDispatch } from 'react-redux';
import { setCountry } from '../../../../../redux/mainPageTopReduser';
import { appSelector } from '../../../../../redux/appReducer';

function CountryList(props) {

    const { countries } = useSelector(appSelector);
    const dispatch = useDispatch();

    return <>
        {countries.map(country => <li 
            className="Country" 
            key={country}
            onClick={() => {
                dispatch(setCountry(country));
                props.onChangeCondition('');
            }}>{country}</li>)}
    </>
}

export default CountryList;