import { useHistory } from 'react-router-dom';
import './AdminLenthFilter.css';

function AdminLenthFilter () {

    let history = useHistory()

    return <div className="AdminLenthFilter">

            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Country"/>
            <input type="text" placeholder="Date" />
            <button onClick={() => history.push('./admin/form')}>Create event</button>

        </div>
}

export default AdminLenthFilter;
