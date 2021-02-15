import { Switch, Route } from 'react-router-dom' ;
import Dashboard from '../Pages/Dashboard/Dashboard';
import CreateHireRequest from '../Pages/Dashboard/CreateHireProject' ;


const AfterLoginRoutes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/generate/request" component={CreateHireRequest} />
        </Switch>
    ) ;
}

export default AfterLoginRoutes ;