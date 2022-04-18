import React from "react";
import Auth from '../../utils/auth';
import '../../index.css';
import './style.css';

function Footer() {
    const customerFooter = 'Have any burning questions? Interested in adding your mall to our site? Click here to contact us!'
    // const developerLoginFooter = 'Having trouble signing in? Click here to contact us!'
    const developerDashboardFooter = 'Experiencing any tech issues? Click here to contact us!'

    return (
        <>
            <div class="footer">
                {Auth.loggedIn() ? (
                    <>
                        <a href="/contact">{developerDashboardFooter}</a>
                    </>
                ) : (
                    <>
                    <a href="/contact">{customerFooter}</a>
                    </>
                )}
            </div>
        </>
    )
}

export default Footer;