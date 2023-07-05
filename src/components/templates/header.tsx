import { NavBar } from '@/components/molecules';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <div className="py-7 lg:px-24 px-10 flex justify-between items-center">
      <Link href={'/'} className="text-2xl font-bold">
        PraiseC<span className="text-[#F95842]">o</span>des
      </Link>
      <NavBar />
      <div></div>
    </div>
  )
}

export default Header;
