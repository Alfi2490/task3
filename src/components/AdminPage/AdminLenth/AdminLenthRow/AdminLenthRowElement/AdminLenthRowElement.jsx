import { useState } from 'react';
import { setEvent } from '../../../../../redux/adminReducer';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AdminLenthRowElement (props) {

    const [state, setState] = useState(false);
    const event = props.event;
    const dispatch = useDispatch();
    const history = useHistory();

    function handleSetEvent () {
        dispatch(setEvent(event));
        history.push('/admin/form')
    }

    const littleElem = <tr className="AdminLenthRowElement">
            <td onClick={() => setState(!state)}>{event.Country}</td>
            <td>{event.Title}</td>
            <td>{event.Dates.From.slice(4,15)}</td>        
        </tr>;

    const bigElem = <tr className="AdminLenthRowElement">
        <td onClick={() => setState(!state)}>{event.Country}</td>
        <td>{event.Title}, {event.Price}$</td>
        <td>
            {event.Dates.From.slice(4,15)} - {event.Dates.To.slice(4,15)} 
            <br /> 
            {event.Way}
            <button onClick={() => handleSetEvent() }>Edit event</button>
        </td>        
</tr>;

    return state ? bigElem : littleElem
}

export default AdminLenthRowElement;