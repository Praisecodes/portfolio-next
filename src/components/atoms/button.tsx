type ButtonType = {
  children: string;
  onClick: () => any;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonType): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={className || `duration-150 bg-[#F95842] px-20 py-3 hover:bg-transparent border border-[#F95842] text-base text-white w-fit rounded-md`}
    >
      {children}
    </button>
  )
}

export default Button;
