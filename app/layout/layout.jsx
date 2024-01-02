import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import bg from '../../public/img/pattern/pattern2-trs.png';

export default function Layout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full min-h-screen items-center justify-between flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-full border-b-2 pl-64 justify-between min-h-screen">
          <Header />
          <div className="hero flex flex-col items-center w-full min-h-screen mt-20" style={{ backgroundImage: `url(${bg.src})` }}>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
