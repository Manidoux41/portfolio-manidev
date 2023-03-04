import React from "react";
import avatar from "../assets/20645584_1448975145196379_8447375169095178134_o.jpg";
import { TypeAnimation } from "react-type-animation";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Hero() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[1]"
        src={avatar}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4-xl font-bold text-gray-800">I'm Manfred Parbatia</h1>
          <h2 className="flex sm:text-3xl text-2xl text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                2000, // Waits 2s
                "Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast",
                2000,
                
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: '5px' }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <BsTwitter size={20} className='cursor-pointer' />
            <BsFacebook size={20} className='cursor-pointer' />
            <BsInstagram size={20} className='cursor-pointer' />
            <BsLinkedin size={20} className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
