import Top from './Top/Top';
import Bottom from './Bottom/Bottom';
import { useEffect } from 'react';
import { getEventsAction, appSelector } from '../../redux/appReducer';
import { useDispatch, useSelector }from 'react-redux';
import Error from './Error/Error.jsx';

function MainPage() {

    const dispatch = useDispatch();
    const { error } = useSelector(appSelector);

    useEffect(() => {
        dispatch(getEventsAction());
    }, [dispatch]);

    return <div >

        {error && <Error />}

        <Top />

        <Bottom />
        
    </div>
} 

export default MainPage;