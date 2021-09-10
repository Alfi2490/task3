import { useSelector, useDispatch } from 'react-redux';
import { appSelector } from '../../../../../redux/appReducer';
import { setType } from '../../../../../redux/mainPageTopReduser';

function TypeList(props) {

    const { types } = useSelector(appSelector);
    const dispatch = useDispatch();

    return <>
        {types.map(type => <li 
            className="Type" 
            key={type}
            onClick={() => {
                dispatch(setType(type));
                props.onChangeCondition('');
            }}>{type}</li>)}
    </>
}

export default TypeList;