import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  return (
    <div className='contact' id='contact as'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme} alt=''/>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I am currently available to take on new projects, so feel free to send me a message about anything that you want to work on. you can contact anytime</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt=''/><p>dkdinesh7398@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt=''/><p>+6369642008</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt=''/><p>Dindigul, tamilnadu</p>
                    </div>
                </div>
            </div >
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>your name</label>
                <input type='text' placeholder='enter your name' name='name'/>
                <label htmlFor=''>your Email</label>
                <input type='email' placeholder='enter your email' name='email'/>
                <label htmlFor=''>write your message </label>
                <textarea name='message' id='message'  rows ="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact