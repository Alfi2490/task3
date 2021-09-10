function Type(props) {

    const types = props.types;

    return <>
        {types.map(type => <li 
            className="Type" 
            key={type}
            onClick={() => {
                props.setType('Type', type);
                props.onChangeCondition('');
            }}>{type}</li>)}
    </>
}

export default Type;