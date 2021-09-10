import './Error.css';
import { useSelector } from 'react-redux';
import { appSelector } from '../../../redux/appReducer';

function Error() {

    const { error } = useSelector(appSelector);

    return <span className="Error">{error}</span>
}

export default Error;