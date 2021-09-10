import db from './initial';
import { collection, getDocs } from 'firebase/firestore/lite'

async function getEvents(){

    try {
        const eventsCol = collection(db, 'events');
        const eventsSnapshot = await getDocs(eventsCol);
        const eventsList = eventsSnapshot.docs.map( doc => doc.data() );
        return eventsList;
    } catch (error) {
        return Promise.reject(error.message);
    }

}

export default getEvents;