import Element from "./Element/Element";
import './Block_1.css';
import { useSelector } from 'react-redux';
import { appSelector } from '../../../redux/appReducer';

function BLOCK_1() {

    const { events } = useSelector(appSelector);

    return <div className="BLOCK_1">

        {events.map(event => 

            <Element 
                key={event.ID} 
                price={event.Price} 
                country={event.Country} 
                title={event.Title}
                way={event.Way}
                days={event.Days}
                nights={event.Nights}
                transfer={event.Transfer}
                dateFrom={event.Dates.From}
                dateTo={event.Dates.To}
                language={event.Language}
                image={event.Image}/>

        )}

    </div>
}

export default BLOCK_1;