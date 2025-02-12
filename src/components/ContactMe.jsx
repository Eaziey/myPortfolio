import React from 'react';
import { contact_message } from '../constants';
import { FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/fa";

const email_API = import.meta.env.VITE_WEB3FORMS_API_KEY;
const gitHub_Link = import.meta.env.VITE_GITHUB_LINK;
const linkedIn_Link = import.meta.env.VITE_LINKEDIN_LINK;
const instagram_Link = import.meta.env.VITE_INSTAGRAM_LINK;

const ContactMe = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
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
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", res);
            setResult(res.message);
          }
    };

    return (
        <div className='container mb-20 pb-4 lg:mb-40 border border-sky-400'>
            <p className=' mt-10 mb-2 text-center text-lg text-sky-400'>get in touch</p>
            <h2 className=' text-center text-4xl'>Contact</h2>

            <div className='flex flex-wrap'>

                <div className='w-full lg:w-1/2 '>

                    <div className='flex flex-col items-center lg:items-start p-10 lg:my-5'>
                        <h5 className='text-xl font-bold text-sky-400 mt-3'>Let's connect</h5>
                        <p className='text-white mt-5 mb-4 max-w-md'>{contact_message}</p>

                        <div className='socials flex flex-row gap-4 mt-7'>
                            <a href={`${gitHub_Link}`} target="_blank" rel="noopener noreferrer">
                                <FaGithub size={40} className='hover:text-sky-500 hover:size-11'/> 
                            </a>

                            <a href={`${linkedIn_Link}`} target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn size={40} className='hover:text-sky-500 hover:size-11'/>
                            </a>

                            <a href={`${instagram_Link}`} target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={40} className='hover:text-sky-500 hover:size-11'/>
                            </a>
                        </div>
                    </div>  

                </div>

                <div className='w-full lg:w-1/2'>

                    <div className='flex flex-col items-center lg:items-start'>

                        <form className='w-full p-10 mb-5' onSubmit={onSubmit}>
                            <h5 className='text-xl text-center font-bold text-sky-400 my-7'>Send me an Email</h5>
                            <div className="input-box">
                                <label htmlFor='name' className='text-white block mb-2 text-sm font-medium mt-6'>Full Name</label>
                                <input type='text' className='bg-[#18191E] border border-sky-400 placeholder-slate-600 text-sm rounded-lg block w-full p-2.5 ' name= "name" placeholder='John Doe' required/>
                            </div>

                            <div className="input-box">
                                <label htmlFor='email' className='text-white block mb-2 text-sm font-medium mt-6'>Your Email Address</label>
                                <input type='email' className='bg-[#18191E] border border-sky-400 placeholder-slate-600 text-sm rounded-lg block w-full p-2.5 ' name= "email" placeholder='johnDoe@google.com' required/>
                            </div>

                            <div className="input-box">
                                <label htmlFor='message' className='text-white block mb-2 text-sm font-medium mt-6'>Your message</label>
                                <textarea className='bg-[#18191E] border border-sky-400 placeholder-slate-600 text-sm rounded-lg block w-full h-60 p-2.5 ' name="message" id="" placeholder="Let's talk about..." required></textarea>
                            </div>
                            <button type="submit" className='my-8 py-2 rounded-full w-full lg:w-40 bg-sky-400 hover:bg-transparent hover:text-sky-400 text-white border-2 border-sky-400 font-semibold'>Send Message</button>
                        </form>
                        <span>{result}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactMe;