import React,{ Component} from 'react';
import {
    Route,
    BrowserRouter as Router, NavLink, Redirect
} from "react-router-dom";
import Login from './containers/login';
import Register from './containers/register';
import Dashboard from './containers/dashboard';

class App extends Component {
    render(){
        return (

            <Router>
                <div>
                    {/*<Redirect from="/" to="/login"/>*/}
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </div>
            </Router>
        );
    }
}
export default App;
