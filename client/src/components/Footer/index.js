import React from "react";
import Auth from '../../utils/auth';
import '../../index.css';
import './style.css';
// import { Redirect } from "react-router-dom";

function Footer() {
    const customerFooter = 'Click here to contact us with questions or sign up to add your mall!'
    // const developerLoginFooter = 'Having trouble signing in? Click here to contact us!'
    const developerDashboardFooter = 'Experiencing tech issues? Click here to contact us!'

    return (
        <>
            <div class="footer">
                {Auth.loggedIn() ? (
                    <>
                        <p>{developerDashboardFooter}</p>
                    </>
                ) : (
                    <>
                    <p>{customerFooter}</p>
                    </>
                )}
            </div>
        </>
    )
}

export default Footer;