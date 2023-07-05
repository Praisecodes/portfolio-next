'use client'

import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoInstagramAlt } from 'react-icons/bi';
import { useState } from 'react';
import { SocialLink } from '../atoms';

const Footer = ():JSX.Element => {
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
    <section className="bg-[#0B0C14] py-8 lg:px-24 px-10 flex justify-between items-center">
      <h2 className="text-white text-lg">
        PraiseC<span className="text-[#F95842]">o</span>des
      </h2>
      <p className="text-sm text-[#3C4068]">
        &copy;copyright {new Date().getFullYear()}
      </p>

      <div className="lg:flex hidden">
        {socialLinks.map((socialLink)=>(
          <SocialLink icon={socialLink.icon} href={socialLink.url} />
        ))}
      </div>
    </section>
  )
}

export default Footer;
