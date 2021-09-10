import Top from './Top/Top';
import Bottom from './Bottom/Bottom';
import { useEffect } from 'react';
import { getEventsAction, appSelector } from '../../redux/appReducer';
import { useDispatch,useSelector }from 'react-redux';

function MainPage() {

    let countries = [];
    let types = [];

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEventsAction());
    },[dispatch]);

    const { events } = useSelector(appSelector);

    events.forEach(event => {

        if(countries.indexOf(event.Country) === -1){
            countries.push(event.Country);
        }
        
        if(types.indexOf(event.Type) === -1){
            types.push(event.Type);
        }
        
    });

    return <div >

        <Top countries={countries} types={types}/>
        <Bottom />
        
    </div>
} 

export default MainPage;