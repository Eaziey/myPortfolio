import React from "react";
import logo from "../assets/1.png";

const Footer = () =>{
    return(
        <>
            <hr className="border border-sky-400 mt-10 mx-5"/>
            <div className="flex h-52 flex-col justify-center items-center  ">
               
                <div className="" >
                    <img src = {logo} width={60} height={60} alt= "logo" className=" mx-10 items-center" />
                </div>
                 <div className="mt-5 flex ml-6">
                    <p>Dev : Letlhogonolo Rakgantsho</p>
                    <hr className="mx-5 border-l-2 border-white h-5"></hr>
                    <p>Copyright 2025 all rights reserved</p>
                </div>
                
            </div>
        </>
    )
}

export default Footer;