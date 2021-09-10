import arrow from './arrowdown.png';

function Selector(props) {

    let currentClass = ``;

    if (props.condition === props.currentState) {
        currentClass = `${props.currentState}IMG`
    }


    return <div 
        className="Selector"
        onClick={() => props.onChangeCondition(props.condition)}>
                {props.value === '' ? 'Dates' : props.value}
            <img src={arrow} alt="arrow" className={currentClass}/> 
    </div>
}

export default Selector;