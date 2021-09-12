import { useFormik } from "formik";
import "./Form.css";
import AboutYou from "./AboutYou";
import * as Yup from "yup";

function Form() {

  const formik = useFormik({

    initialValues: {
      name: "",
      tel: "",
      place: "",
      date: "",
      viber: false,
      whatsapp: false,
      mail: false,
      phone: false,
      internet: false,
      friends: false,
      network: false,
      already: false,
      getEmails: true,
      agreement: false,
    },

    validationSchema: Yup.object({
      name: Yup.string().min(2, "Too short Name!").required("Required!"),
      tel: Yup.string()
        .min(13, "Too short Telephone number!")
        .max(13, "Tel must be exactly 13 characters with +")
        .required('Required!'),
      place: Yup.string().required("Required!"),
    }),
    
    onSubmit: (values) => {
      if (values.agreement !== true) {
        alert('Choose agreement!');
      }
      alert(JSON.stringify(values, null, 2));
    },
  });

  const star = <span style={{ color: "#CB0037" }}>*</span>;

  return (
    <form className="Form" onSubmit={formik.handleSubmit}>
      <p className="FormPart">About you</p>
      <AboutYou star={star} formik={formik} AboutYou />
      <p className="FormPart">About a jorney</p>
      <AboutYou star={star} formik={formik} AboutAJorney />
      <AboutYou formik={formik} Bottom />
      <div className="GetEmails">
        <div className="Groupe">
          <input
            type="checkbox"
            name="getEmails"
            id="getEmails"
            onChange={formik.handleChange}
            defaultChecked
            value={formik.values.getEmails}
          />
          <label htmlFor="getEmails">Get new offers to email</label>
        </div>

        <p>
          We make for you review the best expeditions, news, and lifehacks for
          journeymen every week. If you unlike that, you could unlink at any
          time.
        </p>
      </div>
      <div className="Agreement">
        <div className="Groupe">
          <input
            type="checkbox"
            nmae="agreement"
            id="agreement"
            onChange={formik.handleChange}
            value={formik.values.agreement}
          />
          <label htmlFor="agreement">
            Agree with processing personal data {star}
          </label>
        </div>
        <p>
          Sending offer I confirm agreement with conditions user's agreement
        </p>
        <p>{star} Inputs for obligatory filling</p>
      </div>
      <button className="ButtonSubmit" type="submit">
        <p>Send</p>
        <p>{String.fromCharCode(62)}</p>
      </button>
    </form>
  );
}

export default Form;
