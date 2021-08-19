function FormGroupeBottom(props) {
  const formik = props.formik;

  let component = [];

  if (props.ConnetionType) {
    component = (
      <div className="FormGroupeBottom">
        <p className="FormPart Bottom">Connection type</p>
        <div className="CheckboxGroupe">
          <label htmlFor="viber">Viber</label>
          <input
            type="checkbox"
            name="viber"
            id="viber"
            onChange={formik.handleChange}
            value={formik.values.viber}
            className="CheckBox"
          />
        </div>
        <div className="CheckboxGroupe">
          <label htmlFor="whatsapp">Whatsapp</label>
          <input
            type="checkbox"
            name="whatsapp"
            id="whatsapp"
            onChange={formik.handleChange}
            value={formik.values.whatsapp}
            className="CheckBox"
          />
        </div>
        <div className="CheckboxGroupe">
          <label htmlFor="mail">mail</label>
          <input
            type="checkbox"
            name="mail"
            id="mail"
            onChange={formik.handleChange}
            value={formik.values.mail}
            className="CheckBox"
          />
        </div>
        <div className="CheckboxGroupe">
          <label htmlFor="phone">phone</label>
          <input
            type="checkbox"
            name="phone"
            id="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="CheckBox"
          />
        </div>
      </div>
    );
  }

  if (props.WhereDoYouKnowAboutUs) {
    component = (
      <div className="FormGroupeBottom">
        <p className="FormPart Bottom">Where do you know about us?</p>
        <div className="CheckboxGroupe">
          <label htmlFor="internet">internet</label>
          <input
            type="checkbox"
            name="internet"
            id="internet"
            onChange={formik.handleChange}
            value={formik.values.internet}
            className="CheckBox"
          />
        </div>
        <div className="CheckboxGroupe">
          <label htmlFor="friends">friends</label>
          <input
            type="checkbox"
            name="friends"
            id="friends"
            onChange={formik.handleChange}
            value={formik.values.friends}
            className="CheckBox"
          />
        </div>
        <div className="CheckboxGroupe">
          <label htmlFor="network">network</label>
          <input
            type="checkbox"
            name="network"
            id="network"
            onChange={formik.handleChange}
            value={formik.values.network}
            className="CheckBox"
          />
        </div>
        <div className="CheckboxGroupe">
          <label htmlFor="already">already</label>
          <input
            type="checkbox"
            name="alreadyalready"
            id="phone"
            onChange={formik.handleChange}
            value={formik.values.already}
            className="CheckBox"
          />
        </div>
      </div>
    );
  }

  return component;
}

export default FormGroupeBottom;
