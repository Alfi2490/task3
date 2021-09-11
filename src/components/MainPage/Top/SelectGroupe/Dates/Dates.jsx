import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { useDispatch } from 'react-redux';
import { setDates } from '../../../../../redux/mainPageTopReduser';

function Dates() {

    const dispatch = useDispatch()

    function handleSetDates(arr) {
        const dateFrom = arr[0].toString();
        const dateTo = arr[1].toString();
        const newObj = {From: dateFrom, To: dateTo};
        dispatch(setDates(newObj));
    }

    return <div className="Dates">
            <Calendar 
                className="Calendar w3-animate-opacity"
                calendarType="Hebrew"                
                maxDate={new Date(2023, 1, 1)}
                minDetail="decade"
                minDate={new Date()}
                showNeighboringMonth={false}
                selectRange={true}
                onChange={handleSetDates}
                tileClassName="CalendarTile"
                />
    </div>
}

export default Dates;