import Link from "next/link";

type LinkType = {
  icon: React.ReactNode;
  href: string;
}

const SocialLink = ({ icon, href }: LinkType): JSX.Element => {
  return (
    <Link
      href={href}
      className={`p-2 rounded-full border border-[#F95842] text-white text-xl mx-4 duration-150 hover:text-[#F95842]`}
    >
      {icon}
    </Link>
  )
}

export default SocialLink;
