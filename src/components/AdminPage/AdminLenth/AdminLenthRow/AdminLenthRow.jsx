import AdminLenthRowElement from './AdminLenthRowElement/AdminLenthRowElement';
import { useSelector } from 'react-redux';
import { appSelector } from '../../../../redux/appReducer';
import './AdminLenthRow.css';

function AdminLenthRow () {

    const { events } = useSelector(appSelector);

    return <table className="AdminLenthRow">

            <thead>
                <td>Country</td><td>Title</td><td>Date</td>
            </thead>

            <tbody>
                {events.map( event => <AdminLenthRowElement 
                                    key={event.key}
                                    event={event}
                                />)}
            </tbody>
            

        </table>
}

export default AdminLenthRow;
