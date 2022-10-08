import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                <div className='card'>
                    <h1>Login</h1>
                    <form action="">
                        <input placeholder='Username' type="text"  id="username" />
                        <input  placeholder='Password'type="password"  id="password" />
                        <div id='rem'><input type="checkbox" id="remember" /><span >Remember me</span></div>
                        <button type="submit">LOGIN</button>
                    </form>
                    <a href="">Forgot your password?</a>
                </div>
                <p>Don't have account? <span><a href="=">Sign Up</a></span></p>
            </div>
        );
    }
}
 
export default Login;