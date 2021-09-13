function AdminLenthRowElement (props) {

    const event = props.event;

    return <tr className="AdminLenthRowElement">

            <td>{event.Title}</td>
            <td>{event.Country}</td>
            <td>{event.Dates.From.slice(4,15)}</td>
        
        </tr>
}

export default AdminLenthRowElement;