import React, { useState } from 'react'
import './register.scss'
function Register() {

    const [isValidateEmail, setIsValidateEmail] = useState(false)

    const onChangeHandler = (e) => {
        let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if (regex.test(e.target.value)) {
            setIsValidateEmail(true)
        } else {
            setIsValidateEmail(false)
        }

    }




    return (
        <div className="register">

            <div className="top">
                <div className="wrapper">

                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
                        alt=""
                    ></img>

                    <button>Sign In</button>
                </div>

            </div>

            <div className="main">

                <h1>Unlimited movies, TV shows and more</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                <div className="input">
                    <input style={!isValidateEmail ? { border: "1px solid red" } : { border: "1px solid green"}} type="email" onChange={onChangeHandler} />
                    <button>Get Started</button>
                </div>


            </div>

        </div>
    )
}

export default Register
