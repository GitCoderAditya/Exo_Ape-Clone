import { motion } from 'framer-motion'
import React from 'react'

function Ours() {
  return (
    
    <div className='h-[110vh] bg-zinc-950 w-full px-5 sm:px-20 py-20 '>
        <div className="sm:h-[70%]  sm:flex border-b-[1px] border-zinc-400 justify-between pb-12 mt-10 sm:mt-1">
            <div className="pb-8 sm:w-[30%] sm:text-left text-center">
                <h1 className='sm:text-9xl text-7xl tracking-tight text-[#E0CCBB]'><motion.span
              initial={{ opacity: 0, rotate: 90, y: "40%" }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block origin-left text-white  "
            >
              Our
            </motion.span></h1>
                <h1 className='sm:text-9xl tracking-tight text-7xl text-[#E0CCBB]'><motion.span
              initial={{ opacity: 0, rotate: 90, y: "40%" }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block origin-left text-white  "
            >
              Story
            </motion.span></h1>
                <p className='tracking-tight sm:text-xl  text-[#E0CCBB] pt-10 '>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>

                

            </div>
            <div className='flex justify-center'>
                <video autoPlay muted loop className='bg-green-200 aspect-video w-[20rem] sm:w-[40rem] object-cover ' src="https://www.exoape.com/video/video-6.mp4"></video>
            </div>

        </div>
        
    </div>
  )
}

export default Ours