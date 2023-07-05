'use client'

import Link from "next/link";
import { useState } from "react";

const NavBar = (): JSX.Element => {
  const [navLinks] = useState<any[]>([
    {
      title: 'Home',
      route: '/',
    },
    {
      title: 'Service',
      route: '/service',
    },
    {
      title: 'About',
      route: '/about',
    },
    {
      title: 'Skills',
      route: '/skills',
    },
    {
      title: 'Blog',
      route: '/blog',
    },
    {
      title: 'Contact',
      route: '/contact',
    },
  ]);

  return (
    <ul className="hidden lg:block md:block">
      {navLinks.map((navLink, id)=>(
        <li key={id} className="float-left mx-3 px-2 duration-150 hover:text-[#F95842]">
          <Link href={navLink.route}>
            {navLink.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavBar;
