import { motion } from "framer-motion";
import React from "react";

function Spread() {
  return (
    <div className="w-full bg-white py-20 ">
      <div className="max-w-screen-2xl mx-atuo px-5 sm:px-20">
        <div className="flex items-center justify-center gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black w-3"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1 className="text-sm ">In The Media</h1>
        </div>
        <div className="text mt-10 text-center ">
          <h1 className="text-6xl tracking-tighter sm:text-9xl overflow-hidden ">
            <motion.span
              initial={{ opacity: 0, rotate: 90, y: "40%" }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block origin-left  "
            >
              Spread
            </motion.span>
          </h1>
          <h1 className="text-6xl tracking-tighter sm:text-9xl overflow-hidden">
          <motion.span
              initial={{ opacity: 0, rotate: 90, y: "40%" }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block origin-left   "
            >
              the News
            </motion.span>
          </h1>
          <p className="w-2/3 mx-auto mt-5 text-md leading-none sm:w-1/3 ">
            Find out more about our work on these leading design and technology
            platforms
          </p>
          <a
            className="border-b-[1px] border-black pb-1 mt-8 inline-block"
            href=""
          >
            Browse All News
          </a>
        </div>
      </div>
    </div>
  );
}

export default Spread;
