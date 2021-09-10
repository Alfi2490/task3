import Calendar from 'react-calendar';

function Dates(props) {

    const dateFrom = props.dateFrom;
    const dateTo = props.dateTo;

    return <div className="Dates">

            <Calendar 
                className="Calendar w3-animate-opacity"
                value={dateFrom}
                onChange={props.setDateFrom} />

            <Calendar 
                className="Calendar w3-animate-opacity"
                value={dateTo}
                onChange={props.setDateTo} />

    </div>
}

export default Dates;