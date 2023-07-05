'use client'

import { Subheading } from '@/components/atoms';

const AboutSection = (): JSX.Element => {
  return (
    <main className="py-14 lg:px-24 px-10 bg-[#0F101C]">
      <Subheading mainText='About Me' />

      <section className="flex flex-wrap lg:flex-row flex-col mt-10 justify-center items-center">
        <img
          src="/images/praisecodes.png"
          alt="Praise Codes' Photo"
          className="rounded-md max-w-[90%] lg:w-[30%]"
        />
        <section className="lg:px-16 flex-1">
          <h3 className="text-white font-bold text-2xl lg:my-0 mt-5">
            Hi There
          </h3>
          <p className="text-base py-4">
            Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished,
            It helps show how text will look once a piece of content is finished, during the planning phase.
          </p>

          <p className='my-5 w-fit'>
            <a
              href="/files/Okeypraise Junior Resume.pdf"
              download={'Okeypraise Junior Resume'}
              className='px-8 py-4 text-white bg-[#F95842] rounded-full font-bold'
            >
              Download CV
            </a>
          </p>
        </section>
      </section>
    </main>
  )
}

export default AboutSection;
