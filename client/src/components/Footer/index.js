import React from "react";
import '../../index.css'
import './style.css'

function Footer () {
    const footerMessage = ''
    const customerFooter = 'Click here to contact us with questions or sign up to add your mall!'
    const developerLoginFooter = 'Having trouble signing in? Click here to contact us!'
    const developerDashboardFooter = 'Having issues with the dashboard? Click here to contact us!'

    return (
        <div class="footer">

                <p>{developerDashboardFooter}</p>
                <p>{developerLoginFooter}</p>
                <p>{customerFooter}</p>

        </div>
    )
}

export default Footer;