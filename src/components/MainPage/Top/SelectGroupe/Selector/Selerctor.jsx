import arrow from './arrowdown.png';
import { useSelector } from 'react-redux';
import { mainPageTopSelector } from '../../../../../redux/mainPageTopReduser';

function Selector(props) {

    let currentClass = '';

    const { condition } = useSelector(mainPageTopSelector);

    if (props.condition === condition) {
        currentClass = `${condition}IMG`
    }


    return <div 
        className="Selector"
        onClick={() => props.onChangeCondition(props.condition)}>
                {props.value === '' ? 'Dates' : props.value}
            <img src={arrow} alt="arrow" className={currentClass}/> 
    </div>
}

export default Selector;