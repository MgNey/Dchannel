import React,{ Component } from 'react';
import dchannel from "../img/dchannel.jpg";
import {Link} from "react-router-dom";

class Register extends Component{
    render() {
        return(
            <div className="container">
                <div className="locgin-container">
                    <div className="dchannel-form">
                        <h3 className="text-center">Sing Up</h3>
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
                                        <input type="number" className="form-control" placeholder="Phone No *" value=""/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="New Password *" value=""/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="re-enter *" value=""/>
                                    </div>

                                    <div className="form-group text-center">
                                        <button className="btn yellow">
                                            <Link to="/login">Confirm</Link>
                                        </button>
                                        {/*<button className="form-control btn yellow" onClick={this.login}>Login</button>*/}
                                    </div>
                                    <div className="form-group">
                                        <p className="text-center"><Link to="/login" className="ForgetPwd" value="register">Sing In</Link> </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;
