import { useFormik } from 'formik';
import './Form.css';

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

    const star = <span style={{color: '#CB0037'}}>*</span>;

    return <form className="Form" onSubmit={formik.handleSubmit}>
        <p className="FormPart">About you</p>
        <div className="AboutYou">
            <div className="FormGroupe">
                <label htmlFor="name">Name {star}</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} className="Input" />
            </div>
            <div className="FormGroupe">
                <label htmlFor="tel">Telephone</label>
                <input type="text" name="tel" id="tel" onChange={formik.handleChange} value={formik.values.tel} placeholder="+__ _ _______" className="Input" />
             </div>
        </div>        
        <p className="FormPart">About a jorney</p>
        <div className="AboutYou">
            <div className="FormGroupe">
                <label htmlFor="place">When and where you wan to go? {star}</label>
                <input type="text" name="place" id="place" onChange={formik.handleChange} value={formik.values.place} placeholder="Continent, country of city" className="Input" />
            </div>

            <div className="FormGroupe">
                <label htmlFor="date">When?</label>
                <input type="text" name="date" id="date" onChange={formik.handleChange} value={formik.values.date} placeholder="Date or time interval" className="Input" />
            </div>   
        </div>
        <div className="AboutYou">
            <div className="FormGroupeBottom">
                <p className="FormPart Bottom">Connection type</p>
                    <div className="CheckboxGroupe">
                        <label htmlFor="viber">Viber</label>
                        <input type="checkbox" name="viber" id="viber" onChange={formik.handleChange} value={formik.values.viber} className="CHeckBox" />
                    </div>
                    <div className="CheckboxGroupe">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="checkbox" name="whatsapp" id="whatsapp" onChange={formik.handleChange} value={formik.values.whatsapp} className="CHeckBox" />
                    </div>
                    <div className="CheckboxGroupe">
                        <label htmlFor="mail">mail</label>
                        <input type="checkbox" name="mail" id="mail" onChange={formik.handleChange} value={formik.values.mail} className="CHeckBox" />
                    </div>
                    <div className="CheckboxGroupe">
                        <label htmlFor="phone">phone</label>
                        <input type="checkbox" name="phone" id="phone" onChange={formik.handleChange} value={formik.values.phone} className="CHeckBox" />
                    </div>            
            </div>       
            <div className="FormGroupeBottom">
                <p className="FormPart Bottom">Where do you know about us?</p>
                    <div className="CheckboxGroupe">
                        <label htmlFor="internet">internet</label>
                        <input type="checkbox" name="internet" id="internet" onChange={formik.handleChange} value={formik.values.internet} className="CHeckBox" />
                    </div>
                    <div className="CheckboxGroupe">
                        <label htmlFor="friends">friends</label>
                        <input type="checkbox" name="friends" id="friends" onChange={formik.handleChange} value={formik.values.friends} className="CHeckBox" />
                    </div>
                    <div className="CheckboxGroupe">
                        <label htmlFor="network">network</label>
                        <input type="checkbox" name="network" id="network" onChange={formik.handleChange} value={formik.values.network} className="CHeckBox" />
                    </div>
                    <div className="CheckboxGroupe">
                        <label htmlFor="already">already</label>
                        <input type="checkbox" name="alreadyalready" id="phone" onChange={formik.handleChange} value={formik.values.already} className="CHeckBox" />
                    </div>  
            </div>
        </div>
        <div className="GetEmails">
            <input type="checkbox" name="getEmails" id="getEmails" onChange={formik.handleChange} value={formik.values.getEmails} />
            <label htmlFor="getEmails">Get new offers to email</label>
            <p>We make for you review the best expeditions, news, and lifehacks for journeymen every week. If you unlike that, you could unlink at any time.</p>
        </div>
        <div className="Agreement">
            <input type="checkbox" nmae="agreement" id="agreement" onChange={formik.handleChange} value={formik.values.agreement} />
            <label htmlFor="agreement">Agree with processing personal data {star}</label>
            <p>Sending offer I confirm agreement with conditions user's agreement</p>
            <p>{star} Inputs for obligatory filling</p>
        </div>        
        <button className="ButtonSubmit" type="submit"><p>Sent</p><p>{String.fromCharCode(62)}</p></button>
    </form>
}

export default Form;