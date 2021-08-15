import { useFormik } from 'formik';

function Form() {

    const formik = useFormik({
        initialValues: {
            name: '',
            tel: '',
            place: '',
            date: '',
            viber: false,
            whatsapp: false,
            mail: false,
            phone: false,
            internet: false,
            friends: false,
            network: false,
            already: false,
            getEmails: true,
            agreement: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return <form onSubmit={formik.handleSubmit}>

        <p>About you</p>
        <label htmlFor="name">Name *</label>
        <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
        <label htmlFor="tel">Telephone</label>
        <input type="text" name="tel" id="tel" onChange={formik.handleChange} value={formik.values.tel} />

        <p>About a jorney</p>
        <label htmlFor="place">When and where you wan to go? *</label>
        <input type="text" name="place" id="place" onChange={formik.handleChange} value={formik.values.place} />
        <label htmlFor="date">When?</label>
        <input type="text" name="date" id="date" onChange={formik.handleChange} value={formik.values.date} />

        <p>Connection type</p>
        <label htmlFor="viber">Viber</label>
        <input type="checkbox" name="viber" id="viber" onChange={formik.handleChange} value={formik.values.viber} />
        <label htmlFor="whatsapp">Whatsapp</label>
        <input type="checkbox" name="whatsapp" id="whatsapp" onChange={formik.handleChange} value={formik.values.whatsapp} />
        <label htmlFor="mail">mail</label>
        <input type="checkbox" name="mail" id="mail" onChange={formik.handleChange} value={formik.values.mail} />
        <label htmlFor="phone">phone</label>
        <input type="checkbox" name="phone" id="phone" onChange={formik.handleChange} value={formik.values.phone} />

        <p>Where do you know about us?</p>
        <label htmlFor="internet">internet</label>
        <input type="checkbox" name="internet" id="internet" onChange={formik.handleChange} value={formik.values.internet} />
        <label htmlFor="friends">friends</label>
        <input type="checkbox" name="friends" id="friends" onChange={formik.handleChange} value={formik.values.friends} />
        <label htmlFor="network">network</label>
        <input type="checkbox" name="network" id="network" onChange={formik.handleChange} value={formik.values.network} />
        <label htmlFor="already">already</label>
        <input type="checkbox" name="alreadyalready" id="phone" onChange={formik.handleChange} value={formik.values.already} />

        <button type="submit"><p>Sent</p><p>{String.fromCharCode(62)}</p></button>
    </form>
}

export default Form;