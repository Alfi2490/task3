import { useHistory } from 'react-router-dom';
import './AdminLenthFilter.css';
import { useSelector, useDispatch } from 'react-redux';
import { setAdminFilter, appSelector } from '../../../../redux/appReducer';
import { setEvent } from '../../../../redux/adminReducer';

function AdminLenthFilter () {

    let history = useHistory();
    const dispatch = useDispatch();
    const { adminFilter } = useSelector(appSelector);

    function setEventHandler() {
        dispatch(setEvent('nope'));
        history.push('./admin/form')
    }

    function onChangeHandler (payload, type) {
        let {...tmp} = adminFilter;
        if (type === 'title') {
            tmp.Title = payload;
        };
        if (type === 'country') {
            tmp.Country = payload;
        };
        if (type === 'date') {
            tmp.Date = payload;
        }
        dispatch(setAdminFilter(tmp));
    }

    return <div className="AdminLenthFilter">

            <input 
                type="text" 
                placeholder="Title" 
                value={adminFilter.Title}
                onChange={(e) => onChangeHandler(e.target.value, 'title')} />

            <input 
                type="text" 
                placeholder="Country"
                value={adminFilter.Country}
                onChange={(e) => onChangeHandler(e.target.value, 'country')} />

            <input 
                type="text" 
                placeholder="Date"
                value={adminFilter.Date}
                onChange={(e) => onChangeHandler(e.target.value, 'date')}
                 />

            <button onClick={ () => setEventHandler() }>
                Create event
            </button>

        </div>
}

export default AdminLenthFilter;
