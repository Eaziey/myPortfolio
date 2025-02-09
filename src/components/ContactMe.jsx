import React from 'react';
import { contact_message } from '../constants';
import { FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/fa";

const email_API = import.meta.env.VITE_WEB3FORMS_API_KEY;

const ContactMe = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", email_API);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
    };

    return (
        <div className='container mb-20 pb-4 lg:mb-40'>
            <p className=' mt-10 mb-2 text-center text-lg'>get in touch</p>
            <h2 className=' text-center text-4xl'>Contact</h2>

            <div className='flex flex-wrap'>

                

                <div className='w-full lg:w-1/2'>

                    <div className='flex flex-col justify-center'>
                        <h5 className='text-xl font-bold text-white my-2'>Let's connect</h5>
                        <p className='text-sky-400 mb-4 max-w-md'>{contact_message}</p>

                        <div className='socials flex flex-row gap-2'>

                        </div>
                    </div>  

                </div>

                <div className='w-full lg:w-1/2'>

                    <div className='flex flex-col'>

                        <form onSubmit={onSubmit}>
                            <h4>Send me an Email</h4>
                            <div className="input-box">
                                <label>Full Name</label>
                                <input type='text' className='field' name= "name" placeholder='Enter your full name' required/>
                            </div>

                            <div className="input-box">
                                <label>Email Address</label>
                                <input type='email' className='field' name= "email" placeholder='Enter your email' required/>
                            </div>

                            <div className="input-box">
                                <label>Subject</label>
                                <input type='text' className='field' name= "subject" placeholder='Enter the subject of your email' required/>
                            </div>

                            <div className="input-box">
                                <label>Your message</label>
                                <textarea className='field' name="message" id="" placeholder='Enter your message' required></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactMe;