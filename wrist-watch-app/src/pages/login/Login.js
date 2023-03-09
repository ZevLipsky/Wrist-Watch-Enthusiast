import React from "react";
import './login.css';

const Login = () => {
    return(
        <div className="login" >
            <div className="card">
                <div className="left">
                    <h1>Welcome Watch Lover</h1>
                    <p>Welcome to watch jddshjkfhkjvjknvkjw

                    </p>
                    <spane>Don't have an account?</spane>
                    <button>Register Here!</button>

                </div>
                <div className="right">
                    <h1>Login </h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type= "password" placeholder="Password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;