// import {useDispatch} from 'react-redux';
// import {changeCondition} from '../../redux/appReducer';
import Top from './Top/Top';
import Bottom from './Bottom/Bottom';

function MainPage() {

    // const dispatch = useDispatch();

    return <div 

    // onClick={() => dispatch(changeCondition('LenthWithForm'))}

    >
        <Top />
        <Bottom />
    </div>
} 

export default MainPage;