import React from 'react'
import Value from '../images/value.svg'
import Flag from '../images/flag.svg'
import Target from '../images/target.svg'

function Objectives() {
  return (
    <div className="objectives-wrapper">

      <div className="vision">
          <img src={Value} alt="value-icon" width="120px" height="120px"/>
          <h2>Vision</h2>
          <p>
            An Africa where women are equally represented across
            all career roles in Technology
          </p>
      </div>

      <div className="mission">
          <img src={Flag} alt="flag-icon" width="120px" height="120px"/>
          <h2>Mission</h2>
          <p>
            To build a community that embodies technical growth, networking, mentorship
            and visibility amongst all level career roles in Technology
          </p>
      </div>

      <div className="value">
          <img src={Target} alt="target-icon" width="120px" height="120px"/>
          <h2>Values</h2>
          <ul>
            <li>Team work,</li> 
            <li>Community, </li>
            <li>Technical growth,</li>
            <li> Leadership, </li>
            <li>Visibility</li>
          </ul>
      </div>

    </div>
  )
}

export default Objectives
