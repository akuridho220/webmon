import Dropdown from './Dropdown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPath = usePathname();

  const isActive = (href) => router.pathname === href;
  return (
    <nav className="flex justify-between w-full items-center">
      <Link href="/dashboard" className={currentPath === '/dashboard' ? 'underline underline-offset-8 shadow-md' : 'hover:underline hover:underline-offset-8 transition-all hover:shadow-md '}>
        Home
      </Link>
      <Dropdown />
      <Link href="/monitoring-pcl" className={currentPath === '/monitoring-pcl' ? 'underline  underline-offset-8 shadow-md' : 'hover:underline hover:underline-offset-8 transition-all hover:shadow-md '}>
        Monitoring
      </Link>
      <Link href="/pusat-bantuan/faq" className={currentPath === '/pusat-bantuan/faq' ? 'underline  underline-offset-8 shadow-md' : 'hover:underline hover:underline-offset-8 transition-all hover:shadow-md '}>
        FAQ
      </Link>
    </nav>
  );
};

export default Navbar;
