import FormGroupeBottom from "./FormGroupeBottom";

function AboutYou(props) {

    const formik = props.formik;

    let component = [];

    if (props.AboutYou) {
        component = <div className="AboutYou">
            <div className="FormGroupe">
                <label htmlFor="name">Name {props.star}</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} className={formik.touched.name && formik.errors.name ? "InputRed" : "Input"} />
                {formik.touched.name && formik.errors.name ? <div className="Error">{formik.errors.name}</div> : null}
            </div>
            <div className="FormGroupe">
                <label htmlFor="tel">Telephone</label>
                <input type="text" name="tel" id="tel" onChange={formik.handleChange} value={formik.values.tel} placeholder="+__ _ _______" className="Input" className={formik.touched.tel && formik.errors.tel ? "InputRed" : "Input"} />
                {formik.touched.tel && formik.errors.tel ? <div className="Error">{formik.errors.tel}</div> : null}
            </div>
        </div>
    };

    if (props.AboutAJorney) {
        component = <div className="AboutYou">
            <div className="FormGroupe">
                <label htmlFor="place">When and where you wan to go? {props.star}</label>
                <input type="text" name="place" id="place" onChange={formik.handleChange} value={formik.values.place} placeholder="Continent, country of city" className="Input" />
            </div>
            <div className="FormGroupe">
                <label htmlFor="date">When?</label>
                <input type="text" name="date" id="date" onChange={formik.handleChange} value={formik.values.date} placeholder="Date or time interval" className="Input" />
            </div>   
        </div>
    };

    if (props.Bottom) {
        component = <div className="AboutYou">
        <FormGroupeBottom ConnetionType formik={formik} />     
        <FormGroupeBottom WhereDoYouKnowAboutUs formik={formik} />
    </div>
    }

    return component;
}

export default AboutYou;