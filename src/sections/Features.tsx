'use client'
import Image from 'next/image'
import cubeHelix from '@/assets/cube-helix.png'
import cube from '@/assets/cube.png'
import { motion, useScroll, useTransform } from 'framer-motion' 
import { useRef } from 'react';

export const Features = () => {

  const featuresRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: featuresRef, 
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={featuresRef} className="bg-[#FFFFFF] py-24">

        <div className="container">

            <div className='section-heading'>
                <div className='flex justify-center'>
                    <div className='tag'>Everything you need</div>
                </div>
                <h2 className='mt-5 section-title'>Streamlined for easy management</h2>
                <p className='mt-5 section-description'>
                Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
                </p>
            </div>

            <div className='md:flex md:flex-col lg:flex-row md:justify-center md:items-center gap-6'>

                <div className='md:w-96 mt-14 p-10 flex flex-col justify-center items-center border border-[#222]/5 rounded-2xl shadow-2xl'>
                    <motion.img 
                    src={cubeHelix.src} 
                    height={275} 
                    width={275} 
                    alt='Cube helix'
                    animate={{
                        translateY: [-5, 5],
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 4,
                        ease: 'easeInOut'
                      }}/>
                    <h2 className='text-center text-2xl font-bold tracking-tighter'>Integration ecosytem</h2>
                    <p className='mt-3 text-center tracking-tighter'>Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>
                </div>

                <div className='md:w-96 mt-14 p-10 flex flex-col justify-center items-center border border-[#222]/5 rounded-2xl shadow-2xl'>
                    <motion.img 
                    src={cube.src}  
                    height={275} 
                    width={275} 
                    alt='Cube'
                    animate={{
                        translateY: [-5, 5],
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 4,
                        ease: 'easeInOut'
                      }}/>
                    <h2 className='text-center text-2xl font-bold tracking-tighter'>Goal setting and tracking</h2>
                    <p className='mt-3 text-center tracking-tighter'>Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</p>
                </div>

            </div>

        </div>

    </section>
  )
}