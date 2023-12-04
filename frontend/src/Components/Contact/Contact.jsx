import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <>
      <div className='contactPage borde fondoContact'>
          <h3 className='marginContact fondoContact'>Contact</h3>
          <div className='gapContactPage fondoContact'>
                  <span className='marginSpan fondoContact'>Full Name*</span>
                  <input className="borde padding fondoContact" type="text" />
          </div>
          <div className='gapContactPage fondoContact'>
                <span className='marginSpan fondoContact'>E-mail*</span>
                <input className="borde padding fondoContact" type="text" />
          </div>
          <div className='gapContactPage fondoContact'>
                <span className='marginSpan fondoContact'>Message*</span>
                <textarea className="borde padding fondoContact" name="Message" id="" cols="30" rows="10"></textarea>
          </div>
          <div className='gapContactPage sendDiv fondoContact'>
                <button className="borde sendButton padding" >Send</button>
          </div>
        
      </div>
    </>

  )
}

export default Contact