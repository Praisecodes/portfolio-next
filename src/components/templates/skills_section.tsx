'use client'

import { useState } from "react";
import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import { IoLogoJavascript } from 'react-icons/io';
import { SiPhp, SiTailwindcss } from 'react-icons/si';
import { PiFileSqlFill } from 'react-icons/pi';
import { TbBrandCpp, TbBrandReact, TbBrandReactNative, TbBrandRedux, TbBrandNextjs } from 'react-icons/tb';

const SkillsSection = (): JSX.Element => {
  const [skills] = useState<any[]>([
    {
      title: 'HTML5',
      icon: <ImHtmlFive />,
      color: '#F95842',
    },
    {
      title: 'CSS3',
      icon: <ImCss3 />,
      color: '#264DE4',
    },
    {
      title: 'JavaScript',
      icon: <IoLogoJavascript />,
      color: '#f0db4f',
    },
    {
      title: 'PHP',
      icon: <SiPhp />,
      color: '#8993be',
    },
    {
      title: 'SQL',
      icon: <PiFileSqlFill />,
      color: '#c74835',
    },
    {
      title: 'C++',
      icon: <TbBrandCpp />,
      color: '#0f66e9',
    },
    {
      title: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      color: '#8465c9',
    },
    {
      title: 'React JS',
      icon: <TbBrandReact />,
      color: '#61DBFB',
    },
    {
      title: 'React Native',
      icon: <TbBrandReactNative />,
      color: '#f0f8ff',
    },
    {
      title: 'Next JS',
      icon: <TbBrandNextjs />,
      color: '#d8bf5f',
    },
    {
      title: 'Redux Toolkit',
      icon: <TbBrandRedux />,
      color: '#764abc',
    },
  ]);

  return (
    <main className="bg-transparent py-16 lg:px-24 px-10">
      <section className="mx-auto w-fit">
        <h3 className="text-2xl mx-auto text-white after:block after:content-[''] after:h-[0.2rem] after:w-[50%] after:bg-[#F95842] after:rounded-full flex flex-col items-center justify-center w-fit">
          Skills
        </h3>
        <p className="text-base text-white py-3">
          What my skills includes
        </p>
      </section>

      <section className="flex justify-center items-center flex-wrap mt-5">
        {skills.map((skill, id) => (
          <div key={id} className="lg:mx-7 mx-4 my-4 flex flex-col items-center" title={skill.title}>
            <p className={`lg:text-7xl duration-150 text-4xl`} style={{color: skill.color}}>
              {skill.icon}
            </p>
            <p className="text-base">
              {skill.title}
            </p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default SkillsSection;
