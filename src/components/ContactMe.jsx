import React, { useRef } from 'react';
import { contact_message } from '../constants';
import { FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/fa";
import { motion, useInView } from 'motion/react';
import { animate } from 'motion';

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

    const ref = useRef();

    const variants = {
        initial:{
            y: 100,
            opacity: 0,

        },
        animate:{
            y:0,
            opacity: 1,
            transition: {
                duration: 1,
            }
        },
        
    }

    const isInView = useInView(ref, {margin: "-100px"})
    return (
        <div ref={ref} className='container mb-20 pb-4 border border-sky-400 overflow-y-hidden'>
            <p className=' mt-10 mb-2 text-center text-lg text-sky-400'>get in touch</p>
            <h2 className=' text-center text-4xl'>Contact</h2>

            <div className='flex flex-wrap'>

                <motion.div className='w-full lg:w-1/2 ' variants={variants} initial="initial" whileInView={"animate"}>

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

                </motion.div>

                <motion.div className='w-full lg:w-1/2' variants={variants} initial="initial" whileInView={"animate"}>

                    <div className='flex flex-col items-center lg:items-start relative'>

                        <motion.div 
                            className='w-full p-10 mt-20 absolute stroke-sky-400'  
                            initial = {{opacity:1}} 
                            whileInView={{opacity:0}} 
                            transition={{ delay:3, duration: 1}}
                        >
                            <svg className='w-[400px] m-auto' viewBox="0 0 64 64" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                                <g id="_x30_8_email">
                                    <g>
                                        <g>
                                            <motion.path 
                                                initial = {{pathLength: 0}}
                                                animate = {isInView && {pathLength: 1}} 
                                                transition={{duration: 3}}
                                                d="M35.0137,31.8325c0.5488-0.0596,0.9453-0.5532,0.8857-1.1021c-0.0596-0.5493-0.5518-0.9434-1.1025-0.8862     c-6.4932,0.7036-9.5806-1.688-11.0259-3.8203c-2.0195-2.98-2.0645-7.2817-0.1143-10.959     c1.9429-3.6626,5.356-5.7627,9.3657-5.7627c0.001,0,0.002,0,0.0029,0c3.0547,0,5.7949,1.2461,7.3301,3.3325     c1.6016,2.1763,1.8633,5.2012,0.7578,8.7485c-0.4336,1.3921-1.8486,3.2183-3.0938,3.5781     c-0.5078,0.1484-0.9092,0.0938-1.2236-0.1665c-0.3623-0.3013-0.4922-0.769-0.4814-0.9541     c0.002-0.0117,0.0029-0.0225,0.0039-0.0342l1.0957-10.9561c0.0586-0.5493-0.3389-1.042-0.8877-1.1001     c-0.5586-0.061-1.042,0.3389-1.1006,0.8882l-0.0969,0.9086c-0.0175-0.013-0.0319-0.0287-0.0496-0.0414     c-1.2813-0.9214-3.0767-1.0112-4.8047-0.2397c-2.9424,1.3115-5.0669,5.48-4.5469,8.9199c0.3901,2.5801,2.209,4.251,4.9917,4.5845     c1.2773,0.1519,2.8452-0.2251,4.0083-1.085c0.1689,0.2427,0.3682,0.4634,0.5908,0.6484     c0.8242,0.6836,1.9092,0.8794,3.0566,0.5488c2.0088-0.5811,3.8389-2.9502,4.4482-4.9048     c1.6445-5.2793,0.333-8.6396-1.0566-10.5283c-1.9111-2.5972-5.2539-4.1475-8.9414-4.1475c-0.001,0-0.002,0-0.0029,0     c-4.7739,0-8.8315,2.4878-11.1323,6.8252c-2.293,4.3232-2.2046,9.4331,0.2256,13.0186     c2.1333,3.1475,5.8232,4.8188,10.5332,4.8188C33.4111,31.9648,34.2002,31.9209,35.0137,31.8325z M34.9131,17.4961l-0.5693,5.9414     c-0.5811,0.9546-2.1055,1.4746-3.1875,1.3472c-1.9009-0.228-2.9946-1.2026-3.251-2.8975     c-0.3848-2.5454,1.2593-5.8477,3.3838-6.7949c0.5137-0.229,1.0332-0.3433,1.5107-0.3433c0.5029,0,0.96,0.1274,1.3115,0.3804     C34.7412,15.582,35.0176,16.4004,34.9131,17.4961z"/>

                                            <motion.path 
                                                initial = {{pathLength: 0}}
                                                animate = {isInView && {pathLength: 1}} 
                                                transition={{duration: 3}}
                                                d="M59.3057,21.6533l-7.2637-4.4982V2c0-0.5522-0.4473-1-1-1H12.4771c-0.5522,0-1,0.4478-1,1v15.0159     c-3.4714,2.1884-5.806,3.7847-6.9165,4.7346c-1.5254,1.3042-2.3652,3.1631-2.3652,5.2334v29.0249     C2.1953,59.8638,5.3315,63,9.186,63h45.6284c1.8837,0,3.5925-0.7524,4.8508-1.9683c0.0023-0.0023,0.0054-0.003,0.0076-0.0053     c0.0011-0.0012,0.0013-0.0027,0.0024-0.0039c1.3107-1.2715,2.1294-3.0475,2.1294-5.0137V26.9839     C61.8047,25.2393,61.1504,22.7964,59.3057,21.6533z M52.042,19.5073l5.0593,3.1331l-5.0593,4.4129V19.5073z M58.784,23.826     c0.6964,0.7996,1.0207,2.077,1.0207,3.1579v29.0249c0,1.0747-0.3491,2.0649-0.9291,2.8804L39.5911,40.5665L58.784,23.826z      M13.4771,3H50.042v25.7969L31.998,44.5361l-18.521-16.1475V3z M11.4771,19.3841v7.2624L6.7792,22.551     C7.835,21.7673,9.4214,20.6976,11.4771,19.3841z M4.1953,56.0088V26.9839c0-1.1927,0.3796-2.2405,1.0782-3.0918l19.8513,17.3058     L5.7814,59.6376C4.8109,58.7264,4.1953,57.4419,4.1953,56.0088z M9.186,61c-0.5724,0-1.1138-0.1168-1.6263-0.295l19.0789-18.1874     l4.7021,4.0992c0.1885,0.1641,0.4229,0.2461,0.6572,0.2461s0.4692-0.082,0.6572-0.2466l5.4222-4.7294l19.3299,18.3657     C56.6494,60.7177,55.7672,61,54.8145,61H9.186z"/>

                                        </g>

                                    </g>

                                </g>

                            </svg>
                        </motion.div>

                        <motion.form 
                            className='w-full p-10 mb-5' onSubmit={onSubmit}
                            initial = {{opacity:0}} 
                            whileInView={{opacity:1}} 
                            transition={{ delay:4, duration: 1}}
                        >
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
                        </motion.form>
                        <span>{result}</span>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default ContactMe;