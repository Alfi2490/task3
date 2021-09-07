import './Top.css';
import Header from '../../LenthWithForm/Header/Header';

function Top() {
    
    return <div className="MainPageTop">

        <Header noBackground />

        <form onSubmit={e => e.preventDefault()}>

            <button type="submit">Apply</button>

            <div className="SelectGroupe">

                <select name="country" id="country">
                    <option disabled>Country</option>
                    <option value="Israel">Israel</option>
                    <option value="Belarus">Belarus</option>
                </select>

                <select name="date" id="date">
                    <option disabled>Date</option>
                    <option value="Israel">2021</option>
                    <option value="Belarus">2022</option>
                </select>

                <select name="type" id="type">
                    <option disabled>Type</option>
                    <option value="Israel">Rest</option>
                    <option value="Belarus">Tourist</option>
                </select>

            </div>

            <p>We have many opportunities for proposing new jorneys and make you happy!</p>

        </form>
        
    </div>
}

export default Top;