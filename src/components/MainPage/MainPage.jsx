import Top from './Top/Top';
import Bottom from './Bottom/Bottom';
import { useEffect } from 'react';
import { getEventsAction, appSelector } from '../../redux/appReducer';
import { useDispatch, useSelector }from 'react-redux';
import Error from './Error/Error.jsx';
import { useHistory } from 'react-router-dom';
import './GoToAdminPage.css';

function MainPage() {

    const dispatch = useDispatch();
    const { error } = useSelector(appSelector);
    let history = useHistory();

    useEffect(() => {
        dispatch(getEventsAction());
    }, [dispatch]);

    return <div >

        {error && <Error />}

        <span 
            className="GoToAdminPage" 
            onClick={() => history.push('/admin')}
            >Go to admin page</span>

        <Top />

        <Bottom />
        
    </div>
} 

export default MainPage;