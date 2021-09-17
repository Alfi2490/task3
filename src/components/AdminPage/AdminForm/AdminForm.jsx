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

    return <div className="AdminForm">
        Title: <input type="text" name="Title" id="Title" value={formik.values.Title}/><br />
        Country: <input type="text" name="Country" id="Country" value={formik.values.Country}/><br />
        Type: <input type="text" name="Type" id="Type" value={formik.values.Type} /><br />
    </div>
}

export default AdminForm;