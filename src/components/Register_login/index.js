import React, { Component } from 'react';
import MyButtom from '../../utils/button';
import Login from './Login';

class RegisterLogin extends Component {
    render() {
        return (
            <div className="page_wrapper">
                <div className="container">
                    <div className="register_login_container">
                        <div className="left">
                            <h1>New Customers</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <MyButtom 
                                type="default"
                                title="Create an account"
                                linkTo="/register"
                                addStyles={{
                                    margin:'10px 0 0 0'
                                }}
                            />
                        </div>
                        <div className="right">
                            <h2>Registered Customer</h2>
                            <p>If you hame an account please login.</p>

                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterLogin;