import React from 'react'
import './login.scss'
function Login() {




    return (
        <div className="register">
            <div>
<div className="top">
                    <div className="wrapper">

                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
                            alt=""
                        ></img>


                    </div>

                </div>

            </div>


            <div className="btmContainer">
                <div className="main">

                    <h1>Sign in</h1>
                    <div className="input">
                        <input type="email" placeholder="Email or phone number" />
                    </div>

                    <div className="input">
                        <input type="password" placeholder="Password" />
                    </div>
                    <button>Sign in</button>

                    <div className="remember">
                        <input type="checkbox" placeholder="Remember" name="remember" /><label >Remember me</label>

                        <p>Need help?</p>
                    </div>

                    <div className='newNetflix'>
                        <span className='new'>New to Netflix?</span><span>Sign up now.</span>
                    </div>


                    <div className='protected'>
                        <span className='google'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                        <a href='https://www.google.com'>Learn more.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
