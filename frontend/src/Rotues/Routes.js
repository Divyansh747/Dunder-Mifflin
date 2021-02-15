import { Switch, Route } from 'react-router-dom' ;
import Home from '../Pages/Home/Home' ;
import LoginPage from '../Pages/Auth/LoginPage' ;
import SignupPage from '../Pages/Auth/SignupPage' ;

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
        </Switch>
    ) ;
}

export default Routes ;