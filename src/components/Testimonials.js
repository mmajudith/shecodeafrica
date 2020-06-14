import React from 'react'
import Peace from '../images/PeaceAmara.jpg'
import Precious from '../images/PreciousCadeton.jpg'
import Esther from '../images/EstherJolugba.jpg'

function Testimonials() {
  return (
    <div className="Testimonials-wrapper">

        <div className="first-testi-wrapper">
            <p>
                This SCA mentoring program was like a breathe of fresh air that I needed since December 2019.
                I'm so filled as I joined and I have been growing on my learning path (PHP/Laravel).
                In fact my mentor is the best that anyone can have. She's not only good but naturally a guide.
                God bless you @FaithAdekogbe. Thanks She Code Africa & all the organizers. 
                I'll forever make you guys proud.
            </p>
            <p className="name">Onyekachi Peace</p>
            <div className="first-testi-picture">
                <img src={Peace} alt="testimonial-pic" width="100px" height="100px"/>
            </div>
        </div>

        <div className="second-testi-wrapper">
            <p>
                Sometime in 2019, I saw a mentorship application form on twitter and decided to give it a try. 
                I was excited when I got selected for the mentorship program. My mentor,
                Eva has never failed in playing her role and my co-mentee, Aisha, has been of great help.
                I have learnt a lot and the resources provided are awesome. Thanks SCA you guys rock!
            </p>
            <p className="name">Cadeton Precious</p>
            <div className="second-testi-picture"> 
                <img src={Precious} alt="testimonial-pic" width="100px" height="100px"/>
            </div>
        </div>

        <div className="third-testi-wrapper">
            <p>     
                Through She Code Africa, I have met lots of people that have been helpful in my journey so far. 
                I am also privileged to be part of the Cohort 1 of SCA's Mentorship Program and I have learnt 
                so much within a short period.
            </p>
            <p className="name">Jolugba Esther Tinuade</p>
            <div className="third-testi-picture">
                <img src={Esther} alt="testimonial-pic" width="100px" height="100px"/>
            </div>
        </div>

    </div>
  )
}

export default Testimonials
