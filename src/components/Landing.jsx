import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";
motion;

function Landing() {
  return (
    <div className="max-w-screen-2xl mx-auto h-[150vh] sm:h-[250vh] bg-blue-300 relative  ">
      <div className="picture h-full w-full   ">
        <img data-scroll data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1024x1449/filters:format(webp):quality(70)"
          alt=""
        />
      </div>
      <div className="text max-w-screen-2xl mx-auto px-5 sm:px-20 absolute top-0  h- full">
        <div className="para mt-60 sm:mt-[30rem] ">
          {[
            "Global digital design studio partnering with",
            "brands and businesses that create exceptional",
            "experiences where people live, work, and unwind",
            "live, work, and unwind.",
          ].map((index, items) => {
            return (
              <p className=" masker text-lg sm:text-2xl text-white overflow-hidden ">
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{ease:Power4.easeInOut,duration:1.2,delay:index*.2}}
                  className="inline-block origin-left rotate-[75deg] translate-y-1/2"
                >
                  {index}
                </motion.span>
              </p>
            );
          })}
          
        </div>
        <div className="headings mt-10 text-white overflow-hidden ">
          {["Digital","Design","Experience"].map((items,index)=>{
            return (
              <h1   className="text-7xl sm:text-[12rem] tracking-tighter leading-none ">
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{ease:[0.22,1,0.36,1],duration:1.2,delay:index*.15}}
                  className="inline-block origin-left rotate-[75deg] translate-y-1/2"
                >
                  {items}
                </motion.span>
              </h1>
            );
          })}
         
        </div>
        <div className="para2 mt-20 text-white sm:text-2xl sm:w-1/3  ">
          <p>
            We help experience-driven companies thrive by making their audience
            feel the refined intricacies of their brand and product in the
            digital space. Unforgettable journeys start with a click.
          </p>
          <a
            className="border-b-[1px] border-zinc-50 pb-1 inline-block mt-9 text-lg sm:xl"
            href=""
          >
            The Studio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
