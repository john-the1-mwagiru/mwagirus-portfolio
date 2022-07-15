import { useState } from "react"
import { useRef } from "react";
import Validation from "./Validation";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const[firstname,setFirstName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const [errors,setErrors]=useState({});
  const[success,setSuccess]=useState(true);
  
  const form = useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_qqgyrnp', 'template_oecsaxs', form.current, 'zBfaw944GFXVPzDZ6')
      .then((result) => {
          
        console.log(result.text); 
      }, (error) => {
          console.log(error.text);
      });
      setErrors(Validation(firstname,email,message));
      if(firstname&&message&&(/\S+@\S+\.\S+/.test(email))){
        setSuccess(!success);
      }
     setFirstName("");
     setEmail("");
     setMessage("");
  }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's Chat</h1>
                <div className="c-info">
                    <div className="c-info-item">
                         
                      <img src="./assets/phone.jpeg" alt="phone" className="c-icon" />
                      +254729342790
                    </div>

                </div>
            </div>
             <div className="c-right">
             <form  className="my-form"  ref={form} onSubmit={handleSubmit}> 
                 <div><input type="text" name="firstname" placeholder='name'value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
                    {errors.firstname&&<p className="errors"><strong>{errors.firstname}</strong></p>}
                </div>

                 <div>
                   <input type="email" name="email" placeholder='abc123@gmail.com'value={email} onChange={(e)=>setEmail(e.target.value)}/>
                      {errors.email&&<p className="errors"><strong>{errors.email}</strong></p>}
                </div>

                  <div>
                    <textarea type="text" name="message" placeholder='Type Something'value={message} onChange={(e)=>setMessage(e.target.value)}/>
                    {errors.message&&<p className="errors"><strong>{errors.message}</strong></p>}
                </div>

               <div>
                <button>Submit</button>
               </div>
               {!success && <span className="success">Message Sent✔️</span>}
              
        </form>

             <div className="socials">
                <span>My Social Media</span>

                 <a href="https://twitter.com/ngangamwagiru" target="_blank" rel="noreferrer noopener">
                  <img src="./assets/twitter.jpeg" alt="twitter-ico" className="tw-icon" />
                 </a>
                <a  href="https://www.instagram.com/j.mwagiru/?hl=en" target="_blank" rel="noreferrer noopener">
                  <img src="./assets/instagram.jpeg" alt="ig-icon" className="ig-icon" />
                </a>
                <a href="https://github.com/john-the1-mwagiru" target="_blank" rel="noreferrer noopener">
                <img src="./assets/github.jpeg" alt="github icon" className="git-icon" />
                </a>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Contact