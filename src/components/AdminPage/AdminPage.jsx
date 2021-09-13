import AdminForm from "./AdminForm/AdminForm";
import AdminLenth from "./AdminLenth/AdminLenth";
import { Route, Switch, Redirect } from 'react-router-dom';

function AdminPage() {
    return <>

        <Switch>

            <Route path="/admin/form" component={AdminForm} />

            <Route path="/admin" component={AdminLenth} />

            <Redirect from="**" to="/" />

        </Switch>
        
    </>
}

export default AdminPage;