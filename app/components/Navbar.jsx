import Dropdown from "./Dropdown";
import Link from "next/link";

const Navbar = () => {
    return(
        <nav className="flex justify-between w-full items-center">
            <Link href="/dashboard">
                Home
            </Link>
            <Dropdown/>
            <Link href="/monitoring-pcl">
                Monitoring
            </Link>
            <Link href="/pusat-bantuan/faq">
                FAQ
            </Link>
        </nav>
    )
}

export default Navbar;