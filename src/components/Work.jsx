import { motion } from "framer-motion";
import React, { useState } from "react";

function Work() {
  const [elems, setElems] = useState([
    {
      heading: "Pixelflakes",
      subheading: "Architectural Marketing Agency",
      video:
        "https://cdn.pixabay.com/video/2023/07/04/169951-842348732_tiny.mp4",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/b5ccf4619b/studio-d-hero.jpg/m/1100x1370/filters:format(webp):quality(70)",
    },

    {
      heading: "Rino and Pelle",
      subheading: "Effortless chick lifestyle",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/900x1121/filters:quality(90)",
      video:
        "https://cdn.pixabay.com/video/2023/10/18/185503-875752991_tiny.mp4",
    },
    {
      heading: "Aebele Interiors",
      subheading: "Luxurious design experience",
      image:
        "https://a.storyblok.com/f/133769/1606x2000/09a30057bd/aebele-interiors-hero.jpg/m/900x1121/filters:format(webp):quality(70)",
      video:
        "https://cdn.pixabay.com/video/2022/11/22/140111-774507949_tiny.mp4",
    },
    {
      heading: "Pixelflakes",
      subheading: "Architectural Marketing Agency",
      image:
        "https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1100x1370/filters:format(webp):quality(70)",
      video:
        "https://cdn.pixabay.com/video/2022/08/02/126442-735976929_tiny.mp4",
    },
  ]);
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto px-5  sm:px-20 py-28  min-h-screen ">
        <div className=" text-white featured flex gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1 className="text-xs">Featured Projects</h1>
        </div>
        <div>
          <h1 className="text-7xl sm:text-9xl sm:leading-none sm:tracking-tight my-8 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, rotate: 90, y: "40%" }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block origin-left text-white  "
            >
              Work
            </motion.span>{" "}
          </h1>
          <p className="text-white text-lg">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>
        <div className="elems w-full mt-16 sm:flex sm:flex-wrap gap-3   sm:translate-x-5">
          {elems.map((item, index) => {
            return (
              <div className="elem  sm:w-[47%]   ">
                <div
                  key={index}
                  className="vedio h-[100vw] sm:h-[50vw]  bg-green-30 relative overflow-hidden "
                >
                  <motion.img
                  initial={{opacity:1}}
                  whileHover={{opacity:0}}
                    data-scroll
                    data-scroll-speed="-.2"
                    className="w-full h-full object-cover hidden sm:absolute sm:top-0 sm:left-0  sm:z-[2] sm:block"
                    src={item.image}
                    alt=""
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3] "
                    src={item.video}
                  ></video>
                </div>
                <div className="my-8">
                  <h3 className="font-semibold text-lg">{item.heading}</h3>
                  <p className="capiatlize opacity-60 text-lg">
                    {item.subheading}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
