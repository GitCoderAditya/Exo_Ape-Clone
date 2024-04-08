import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function PlayReel() {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    tl.to(
      videodiv.current,
      { width: "120%", height: "120%", ease: Power4.easeInOut },
      "a"
    )

      .to(
        play.current,
        {
          x: "-150%",
          ease: Power4,
          scale:1.5
        },
        "a"
      )

      .to(
        reel.current,
        {
          x: "150%",
          ease: Power4,
          
          scale:1.5
        },
        "a"
      );
  });
  return (
    <div
      ref={parent}
      className=" relative w-full h-screen overflow-hidden bg-black"
    >
      <div
        ref={videodiv}
        className=" w-40 aspect-video absolute bg-red-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-80"
      >
        <video
          src="https://cdn.pixabay.com/video/2023/12/07/192357-892475199_tiny.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full  object-cover scale-[1.5] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></video>
      </div>
      <div className=" overlay w-full h-full text-white absolute  flex flex-col justify-between py-16">
        <div className="w-full flex justify-center gap-3 ">
          <svg
            data-v-669b4a84=""
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              data-v-669b4a84=""
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 className="text-sm">Work In Motion</h3>
        </div>
        <h1 className="w-full flex justify-center gap-28 sm:gap-[30rem]">
          <div ref={play} className="text-6xl font-light sm:text-9xl">
            Play
          </div>
          <div ref={reel} className="text-6xl font-light sm:text-9xl">
            Reel
          </div>
        </h1>
        <p className="text-center px-8 text-sm">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
}

export default PlayReel;
