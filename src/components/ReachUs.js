import React from 'react'

function ReachUs() {
  return (
    <div className="reach-us-wrapper">

        <div>
            <h2>Several ways to Identify with Us</h2>
        </div>

        <div className="activities-wrapper">

            <div className="slack">
                <p className="join">Join our Growing Slack Community</p>
                <p>
                    Join over 1400 Women in Tech from across several African coutries on our Slack community to network,
                    stay updated, get help, and grow in your career.
                </p>
                <button>Join Now</button>
            </div>

            <div className="social-media">
                <p className="join">Follow Us on Social Media</p>
                <p className="pad-top">
                    Stay updated with us and be the first to know about our activities and all,
                    by following our social media pages - Twitter, Facebook, Instagram, LinkedIn, Medium.
                </p>
                <button>Learn More</button>
            </div>

            <div className="event">
                <p className="join">Attend an Event</p>
                <p className="pad-top">
                    Participate in any of our online or offline events and trainings:
                    Technical and non-Technical Events, Meetups, Mentoring Program
                </p>
                <button>Learn More</button>
            </div>

            <div className="sponsor">
                <p className="join">Sponsor or Partner with Us</p>
                <p className="pad-top">
                    Sponsor our next event via a donation or Partner with our organisation to reach more women in tech
                    across Africa and help us make an impact! Your support would go a long way.
                </p>
                <button>Learn More</button>
            </div>

        </div>
    </div>
  )
}

export default ReachUs
