import React,{ Component } from 'react';
import dchannel from './../img/dchannel.jpg';
import { Link} from 'react-router-dom';
class Login extends Component {
constructor() {
    super();
    this.state= {
        loginstate: false
    }
}
    render() {
        return(
            <div className="container">
                <div className="locgin-container">
                    <div className="dchannel-form">
                        <h3 className="text-center">Sign In</h3>
                        <div className="row">
                            <div className="col-md-6 float-right">
                                <div className="dchannel-logo">
                                    <img src={dchannel} alt="dchannel"/>
                                </div>
                            </div>
                            <div className="col-md-6 float-right">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Email *" value=""/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Your Password *" value=""/>
                                    </div>
                                    <div className="form-group text-center">
                                        <button className="btn yellow">
                                            <Link to="/dashboard/order">Login</Link>
                                        </button>
                                        {/*<button className="form-control btn yellow" onClick={this.login}>Login</button>*/}
                                    </div>
                                    {/*<div className="form-group">*/}
                                    {/*    <p className="text-center"><Link to="/register" className="ForgetPwd" value="register">REGISTER</Link> </p>*/}
                                    {/*</div>*/}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
