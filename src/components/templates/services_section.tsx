'use client'

import { useState } from "react";
import { HiServerStack } from 'react-icons/hi2';
import { HiColorSwatch } from 'react-icons/hi';
import { FiCodesandbox } from 'react-icons/fi';
import { Subheading } from '@/components/atoms';

const ServicesSection = (): JSX.Element => {
  const [services] = useState<any[]>([
    {
      title: 'Backend Development',
      icon: <HiServerStack />,
      description: 'Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. ',
    },
    {
      title: 'Frontend Development',
      icon: <HiColorSwatch />,
      description: 'Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. ',
      focus: true,
    },
    {
      title: 'Fullstack Development',
      icon: <FiCodesandbox />,
      description: 'Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. ',
    },
  ]);

  return (
    <main className="bg-transparent py-16 lg:px-24 px-10">
      <section className={`flex lg:flex-row justify-between flex-col`}>
        {/* <div className="lg:mx-0 mx-auto lg:my-0 mb-5 lg:block flex flex-col justify-center items-center">
          <p className="text-xs text-[#F95842]">
            SERVICES
          </p>
          <h1 className="text-3xl w-fit lg:block flex justify-center items-center flex-col my-1 text-white after:content-[''] after:block after:h-[0.2rem] after:my-[0.2rem] after:bg-[#F95842] after:w-[45%] after:rounded-full">
            My Services
          </h1>
        </div> */}

        <Subheading smallText="SERVICES" mainText="My Services" />

        <div className="flex-1 lg:px-36 px-0">
          <p>
            Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit.
            It helps show how text will look once a piece of content is finished, during the planning phase.
          </p>
        </div>
      </section>

      <section className="mt-20 flex flex-wrap justify-center lg:justify-between items-center">
        {services.map((service) => (
          <div className={`${service.focus ? 'bg-[#F95842]' : 'bg-[#0F101C]'} lg:mx-0 mx-3 my-2 rounded-lg px-7 py-7 w-[22rem]`}>
            <p className="text-3xl py-5">
              {service.icon}
            </p>
            <p className="text-white text-xl">
              {service.title}
            </p>
            <p className="text-base text-white py-4">
              {service.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default ServicesSection;
