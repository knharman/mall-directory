import React from "react";
import Auth from '../../utils/auth';
import '../../index.css';
import './style.css';

function Footer() {
    const customerFooter = <p className="maringSpacing">Have any burning questions? Interested in adding your mall to our site? Click here to contact us!</p>
    const developerDashboardFooter = <p>Experiencing any tech issues? Click here to contact us!</p>

    return (
        <>
            <div>
            {Auth.loggedIn() ? (
        <>
          <div className="footer2 footer">
            <a className="a2 a" href="/contact">
              {developerDashboardFooter}
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="footer1 footer">
            <a className="a1 a" href="/contact">
              {customerFooter}
            </a>
          </div>
        </>
      )}
            </div>
        </>
    )
}

export default Footer;