import * as Icon from 'react-feather';

export default function Sidebar() {
    return (
        <aside className="flex flex-col justify-between items-stretch w-1/5 fixed top-0 left-0 bg-[#951A2E] h-screen shadow-xl">
            <div className="">
                <div className="flex flex-row items-center h-auto w-full px-4">
                    <div className="p-2 flex">
                        <img src="/img/logo/logo-icon.png" alt="logo sidebar" width={72} height={70}/>
                    </div>
                    <div className="p-2">
                        <p className="text-lg text-white font-bold">Web Monitoring</p>
                        <p className="text-white text-sm">PKL 63</p>
                    </div>
                </div>
                <div>
                    <nav className="text-white text-lg font-semibold">
                        <a href="" className="flex items-center py-4 pl-6 nav-item">
                            <div className="grow-0 pr-4">
                                <Icon.Home />
                            </div>
                            Dashboard
                        </a>
                        <a href="" className="flex items-center py-4 pl-6 nav-item">
                            <div className="grow-0 pr-4">
                                <Icon.FileText />
                            </div>
                            Riset
                        </a>
                        <a href="" className="flex items-center py-4 pl-6 nav-item">
                            <div className="grow-0 pr-4">
                                <Icon.MapPin />
                            </div>
                            Lokasi PPL
                        </a>
                        <a href="" className="flex items-center py-4 pl-6 nav-item">
                            <div className="grow-0 pr-4">
                                <Icon.Search />
                            </div>
                            FAQ
                        </a>
                    </nav>
                </div>
            </div>
            <div className="pb-4">
                <nav className="text-white text-lg font-semibold">
                    <a href="" className="flex items-center py-4 pl-6 nav-item">
                        <div className="grow-0 pr-4">
                            <Icon.User />
                        </div>
                    Profil Saya
                    </a>
                    <a href="" className="flex items-center py-4 pl-6 nav-item">
                        <div className="grow-0 pr-4">
                            <Icon.LogOut />
                        </div>
                        Logout
                    </a>
                </nav>
            </div>
        </aside>
    );
};