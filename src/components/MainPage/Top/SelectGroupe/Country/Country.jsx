function Country(props) {

    const countries = props.countries;

    return <>
        {countries.map(country => <li 
            className="Country" 
            key={country}
            onClick={() => {
                props.setCountry('Country', country);
                props.onChangeCondition('');
            }}>{country}</li>)}
    </>
}

export default Country;