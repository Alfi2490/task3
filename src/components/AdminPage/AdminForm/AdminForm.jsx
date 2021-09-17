import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { adminSelector } from '../../../redux/adminReducer';

function AdminForm() {

    const event = useSelector(adminSelector);

    const formik = useFormik({

        initialValues: {

            Country: event.Country,
            Dates: event.Dates,
            Days: event.Days,
            ID: event.ID,
            Image: event.Image,
            Language: event.Language,
            Nights: event.Nights,
            Price: event.Price,
            Title: event.Title,
            Transfer: event.Transfer,
            Type: event.Type,
            Way: event.Way
            
        },

        onSubmit: values => {

        }

    });

    return <form className="AdminForm">
    
        Title: <input type="text" name="Title" id="Title" value={formik.values.Title}/><br />
        Country: <input type="text" name="Country" id="Country" value={formik.values.Country}/><br />
        Type: <input type="text" name="Type" id="Type" value={formik.values.Type} /><br />
        Transfer: <input type="checkbox" name="Transfer" id="Transfer" checked={formik.values.Transfer} /><br />
        Days: <input type="number" name="Days" id="Days" value={formik.values.Days} /><br />
        Nights: <input type="number" name="Nights" id="Nights" value={formik.values.Nights} /><br />
        Price: <input type="number" name="Price" id="Price" value={formik.values.Price} /><br />
        Language: <input type="text" name="Language" id="Language" value={formik.values.Language} /><br />
        Way: <input type="text" name="Way" id="Way" value={formik.values.Way} /><br />

        <button type="submit">Submit</button>
        <button>Go back</button>

    </form>
}

export default AdminForm;