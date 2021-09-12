function Element(props) {

    const dateFrom = props.dateFrom.slice(0, 15);
    const dateTo = props.dateTo.slice(0, 15);

    console.log(props.image);

    return <div className="Element">

        <div className="Image" style={{backgroundImage:`url("${props.image}")`}}>
            <div className="Price">from {props.price}$</div>
        </div>

        <p className="Country">{props.country}</p>

        <h2 className="Title">{props.title}</h2>

        <p className="Road">{props.way}</p>

        <p className="Description">{props.days} days / {props.nights} nights    {props.language} language <br /> {dateFrom} - {dateTo} and 15 more dates</p>
        {props.transfer && <div className="AdditionalInformation">Aviatransfer includes!</div>}
    </div>

}

export default Element;