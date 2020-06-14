import React from 'react'
import Twitter from '../images/twitter.svg'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'

function Footer() {
  return (
    <footer>

      <nav className="footer-nav">
        <div>
            <p>Get Involved</p>
            <ul>
                <li>Partnership</li>
                <li>Sponsor/Donate</li>
                <li>Start an S.C.A Chapter</li>
            </ul>
        </div>

        <div>
            <p>About Us</p>
            <ul>
                <li>Meet The Team</li>
                <li>FAQs</li>
                <li>Code of Conduct</li>
            </ul>
        </div>

        <div>
            <p>Community</p>
            <ul>
                <li>Upcoming Events</li>
                <li>Join Our Slack Community</li>
                <li>Follow us on social media</li>
            </ul>
            <div className="social-icons">
                <img src={Twitter} alt="twitter-icon" width="25px" height="25px"/>
                <img src={Facebook} alt="facebook-icon" width="25px" height="25px"/>
                <img src={Instagram} alt="instagram-icon" width="25px" height="25px"/>
            </div>
        </div>

      </nav>

      <div className="artribution">
          <p>All rights reserved. She code Africa © 2020</p>
      </div>

    </footer>
  )
}

export default Footer
