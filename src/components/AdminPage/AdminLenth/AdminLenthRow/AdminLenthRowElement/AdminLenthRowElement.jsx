import { useState } from 'react';

function AdminLenthRowElement (props) {

    const [state, setState] = useState(false);
    const event = props.event;

    const littleElem = <tr className="AdminLenthRowElement">
            <td onClick={() => setState(!state)}>{event.Country}</td>
            <td>{event.Title}</td>
            <td>{event.Dates.From.slice(4,15)}</td>        
        </tr>;

//     const bigElem = <tr className="AdminLenthRowElement">
//         <td onClick={() => setState(!state)}>{event.Country}</td>
//         <td>{event.Title}</td>
//         <td>{event.Dates.From.slice(4,15)}</td>        
// </tr>;

    return littleElem
}

export default AdminLenthRowElement;