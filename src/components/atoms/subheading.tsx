type SubheadingType = {
  smallText?: string;
  mainText: string;
}

const Subheading = ({ smallText, mainText }: SubheadingType): JSX.Element => {
  return (
    <div className="lg:mx-0 mx-auto lg:my-0 mb-5 lg:block flex flex-col justify-center items-center">
      <p className="text-xs text-[#F95842]">
        {smallText}
      </p>
      <h1 className="text-2xl w-fit lg:block flex justify-center items-center flex-col my-1 text-white after:content-[''] after:block after:h-[0.2rem] after:my-[0.2rem] after:bg-[#F95842] after:w-[45%] after:rounded-full">
        {mainText}
      </h1>
    </div>
  )
}

export default Subheading;
