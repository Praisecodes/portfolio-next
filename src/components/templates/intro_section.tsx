'use client'

import { useState } from "react";
import { SocialLink, Button } from '@/components/atoms';
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoInstagramAlt } from 'react-icons/bi';
import Image from "next/image";

const IntroSection = (): JSX.Element => {
  const [socialLinks] = useState<any[]>([
    {
      icon: <BiLogoFacebook />,
      name: 'facebook',
      url: 'https://facebook.com',
    },
    {
      icon: <BiLogoTwitter />,
      name: 'twitter',
      url: 'https://twitter.com',
    },
    {
      icon: <BiLogoLinkedinSquare />,
      name: 'linkedin',
      url: 'https://linkedin.com',
    },
    {
      icon: <BiLogoInstagramAlt />,
      name: 'instagram',
      url: 'https://instagram.com',
    },
  ]);

  return (
    <main className="py-16 lg:px-24 px-10 bg-[#0F101C] flex">
      <section className="font-[Nunito] lg:w-[50%] w-full h-full flex flex-col justify-center">
        {/**Social Links Go Here (Map them out) */}

        <div className="flex">
          {socialLinks.map((socialLink, id) => (
            <SocialLink icon={socialLink.icon} key={id} href={socialLink.url} />
          ))}
        </div>

        <h1 className="lg:text-6xl mt-8 font-bold md:text-4xl text-3xl">
          I am Okeypraise Junior
        </h1>
        <p className="py-3 text-base">
          I’m Okeypraise, professional web developer 2+ years of experience building user friendly interfaces.
        </p>
        <Button 
        className={`border border-[#F95842] py-2 px-10 text-white bg-transparent w-fit rounded-full hover:bg-[#F95842] duration-150`}
        onClick={()=>{}}>
          Hire Me
        </Button>
      </section>

      <section className="w-[50%] hidden lg:flex justify-center items-center">
        <img src="/images/praise.png" alt="Praise Image" className="w-[80%]" />
      </section>
    </main>
  )
}

export default IntroSection;
