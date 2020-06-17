import React from 'react'

function Form() {
  return (
    
      <form>
           <fieldset>
                <legend>We're Listening</legend>
                
                    <div className="input-wrapper">
                        <input type="text" placeholder="FullName" className="fullname" />
                        <input type="text" placeholder="Email" className="email"/>   
                    </div>
                    <div className="text-area">
                        <textarea placeholder="Message"/>
                    </div>
                    <div className="submit-btn">
                        <button type="submit">Submit</button>
                    </div>

                
            </fieldset>
      </form>
    
  )
}

export default Form
