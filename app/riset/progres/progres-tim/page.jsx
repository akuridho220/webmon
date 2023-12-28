import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import bg from '../../../../public/img/pattern/pattern2-trs.png';

export default function ProgresTim() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="w-full items-center justify-between flex flex-row h-screen">
                <Sidebar />
                <div className='flex flex-col w-4/5 items-center border-b-2 fixed right-0 justify-between'>
                    <Header />
                    <div className="hero flex flex-col items-center w-full h-screen pt-20" style={{backgroundImage: `url(${bg.src})`}}>
                        /** TODO */
                    </div>
                </div>
            </div>
        </main>
    )
}
