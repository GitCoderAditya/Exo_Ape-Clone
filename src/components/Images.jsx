import gsap, { Power4,Linear, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

function Images() {
  
  const first = useRef(null);
  const third = useRef(null);
  const second = useRef(null);
  const fourth = useRef(null);
  useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline(
      {
        scrollTrigger:{
            trigger: parent.current,
            start: "0 90%",
            scrub:1
        }
      }
    );
    tl.to(first.current,{
      x:"40%",
      ease:Linear
    },'a')
    .to(third.current,{
      x:"-0%",
      ease:Linear,
      
    },'a')
    .to(second.current,{
      x:"20%",
      ease:Linear
    },'a')
    .to(fourth.current,{
      x:"-20%",
      ease:Linear,
      
    },'a')
  }
    
  )
  return (
    <div className='w-full h-[70vh] sm:h-[100vh] flex justify-center items-center bg-white'>
        <div className=" relative w-[40%] sm:w-[25%] sm:h-[80%] h-1/2 bg-red-300">
            <div ref={first} className="absolute w-20 sm:w-40 sm:h-[15rem] h-[7rem] -right-1/3 top-6 bg-red-60"><img src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)" alt="" /></div>
            <div ref={second} className="absolute w-[80%] h-[5rem] sm:w-[20rem] sm:h-[10rem] sm:-left-2/3 bg-green-300 aspect-video top-14 right-[70%]"></div>
            <div ref={third} className="absolute w-[9rem] sm:w-[17rem] aspect-video -left-[60%] -bottom-10 "><img src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)" alt="" /></div>
            <div ref={fourth} className="absolute w-[10rem] sm:w-[20rem] sm:h-[15rem] aspect-[1.7]  -right-[70%] -bottom-[28%] sm:-bottom-[10%] sm:-right-[60%] bg-yellow-300"></div>
            <img className='object-cover w-full h-full' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/350x598/filters:format(webp):quality(70)" alt="" />
        </div>
    </div>
  )
}

export default Images