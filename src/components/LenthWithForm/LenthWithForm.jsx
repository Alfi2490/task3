import Header from './Header/Header';
import BLOCK_1 from './Block_1/Block_1';
import Form from './Form/Form';
import './LenthWithForm.css';
import { useEffect } from 'react';
import { getEventsAction } from '../../redux/appReducer';
import { useDispatch }from 'react-redux';

function LenthWithForm() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEventsAction());
    },[dispatch])

    return <div className="LenthWithForm">
        
        <Header />
        <h1>Country</h1>
        <BLOCK_1 />
        <h1>Application for selection of travel</h1>
        < Form/>

    </div>
}

export default LenthWithForm;