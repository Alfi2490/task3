import Header from './Header/Header';
import BLOCK_1 from './Block_1/Block_1';
import Form from './Form/Form';
import './LenthWithForm.css';
import { useSelector } from 'react-redux';
import { appSelector } from '../../redux/appReducer';

function LenthWithForm() {

    const { filter } = useSelector(appSelector);

    return <div className="LenthWithForm">
        
        <Header />
        <h1>{filter.Country === '' ? 'Country' : filter.Country}</h1>
        <BLOCK_1 />
        <div className="HR"></div>
        <h1>Application for selection of travel</h1>
        < Form/>

    </div>
}

export default LenthWithForm;