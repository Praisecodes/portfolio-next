'use client'

import { Button } from "../atoms";

const ContactSection = (): JSX.Element => {
  return (
    <main className="bg-[#0F101C] py-14 lg:px-24 px-10 flex flex-col items-center">
      <h1 className="text-2xl font-bold after:bg-[#F95842] after:block after:rounded-full after:h-[0.2rem] after:w-[50%] after:content-[''] flex flex-col items-center">
        Contact Me
      </h1>

      <section className="lg:w-[30rem] w-[100%] my-5">
        <form className="w-full relative">
          <input
            type="text"
            placeholder="Full Name"
            className={`w-full my-2 px-4 py-4 bg-[#0B0C14] text-white outline-none rounded-md text-sm`}
          />
          <input
            type="email"
            placeholder="Email"
            className={`w-full my-2 px-4 py-4 bg-[#0B0C14] text-white outline-none rounded-md text-sm`}
          />
          <textarea className="w-full max-h-[13rem] min-h-[13rem] py-4 px-4 outline-none text-sm rounded-md bg-[#0B0C14] my-2" placeholder="Message">
          </textarea>
          <div className="w-fit absolute right-0">
            <Button onClick={()=>{}}>
              Send
            </Button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default ContactSection;
