import React, { useState } from 'react';

const LoginPage = () => {
    const [user, setUser] = useState("Student");
    const [loginDetails, setLoginDetails] = useState({
        emailId: "",
        password: ""
    });


    const handleChange = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.value]: e.target.value });
    }

    const loginUser = () => {
        console.log("I am trying to llgoing in ");
        //Will implement login functionality here
    }
    return (
        <div style={{
            width: "500px"
        }} className=' container px-3 border'>
            <div className='row'>
                <div className="col-10 m-5 d-flex justify-content-around">
                    <button type="button" class="btn btn-dark" onClick={() => { setUser("Student") }}>Student</button>
                    <button type="button" class="btn btn-dark" onClick={() => { setUser("Organization") }}>Organization</button>
                </div>
            </div>
            <hr />
            <form className='login-form '>

                <h3>Log in as <span style={{ color: "#5f788a" }}>{user}</span></h3>
                <p className='text-muted'>*Admin as default</p>

                <div className="form-group">
                    <input type="email" name='emailId' className="form-control" placeholder="Enter email" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <input type="password" name='password' className="form-control" placeholder="Enter password" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={loginUser}>Sign in</button>
                <p className="forgot-password text-right">
                    <a href="#">Forgot password?</a>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;