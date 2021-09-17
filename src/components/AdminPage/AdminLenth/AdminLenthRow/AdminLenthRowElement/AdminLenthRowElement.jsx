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

    const littleElem = <>
            <td >{event.Country}</td>
            <td>{event.Title}</td>
            <td>{event.Dates.From.slice(4,15)}</td>        
        </>;

    const bigElem = <>
        <td>{event.Country}</td>
        <td>{event.Title}, {event.Price}$</td>
        <td>
            {event.Dates.From.slice(4,15)} - {event.Dates.To.slice(4,15)} 
            <br /> 
            {event.Way}
            <button onClick={() => handleSetEvent() }>Edit event</button>
        </td>        
    </>;

    return <tr className="AdminLenthRowElement" onClick={() => setState(!state)}>
           {state ? bigElem : littleElem}
        </tr>;
}

export default AdminLenthRowElement;