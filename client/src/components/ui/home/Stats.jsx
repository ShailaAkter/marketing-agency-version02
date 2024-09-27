"use client"

import ContainerBox from '@/components/shared/ContainerBox';
import statistics from '@/components/utils/stats';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stats = () => 
{
  const [counts, setCounts] = useState(
  {
    projects: 0,
    clients: 0,
    teams: 0,
    awards: 0
  });

 
  const [ref, inView] = useInView(
  {
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.5,    // Trigger when 50% of the section is in view
  });

  useEffect(() => 
  {
    if (inView) 
    {
      const duration = 5000;
      const endValues = 
      {
        projects: 258,
        clients: 350,
        teams: 10,
        awards: 15,
      };

      const increment = duration / Math.max(...Object.values(endValues));

      const timers = Object.keys(endValues).map(key => 
      {
        let start = 0;
        const end = endValues[key];

        return setInterval(() => 
        {
          setCounts((prevCounts) => 
          {
            if (start < end) 
            {
              start += 1;
              return { ...prevCounts, [key]: start };
            } 
            else 
            {
              clearInterval(timers[key]);
              return { ...prevCounts, [key]: end };
            }
          });
        }, increment);
      });

      return () => timers.forEach(timer => clearInterval(timer));
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className='mb-16 md:mb-20 lg:mb-24 xl:mb-24'>

        <div className='bg-secondary-extralight shadow-md py-4 md:py-6 lg:py-8 xl:py-10'>
          <div className='flex justify-center items-center max-w-full md:max-w-4xl lg:max-w-4xl xl:max-w-7xl mx-auto px-8 md:px-20'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-10 justify-center items-center'>

              {
                statistics.map((stat) => (
                <div className='flex justify-start items-center rounded-lg p-2 md:p-6 lg:px-16 lg:py-8 xl:p-2'
                  key={stat.key}
                >
                  <div className='bg-primary text-white p-2 md:p-3 lg:p-3 xl:p-4 rounded-full text-xl md:text-2xl lg:text-3xl xl:text-4xl mr-2 spin'>
                    {stat.icon}
                  </div>
                  <div className=''>
                    <div className='text-primary font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl '>
                      + {`${counts[stat.key]}`}
                    </div>
                    <div className='text-primary font-semibold md:font-semibold lg:font-bold xl:font-bold text-xs md:text-base lg:text-lg xl:text-lg'>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
    </section>
  );
}

export default Stats;
