import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import bg from '../../public/img/pattern/pattern_trans2.png';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full min-h-screen items-center justify-between flex flex-row ">
        <Header />
        <div className="flex flex-wrap w-full">
          <div className="lg:w-64 fixed top-0 left-0 max-lg:w-0 hidden lg:flex z-20 ">
            <Sidebar />
          </div>
          <div className="hero flex flex-col lg:pl-64 items-center  w-full min-h-screen lg:mt-20 mt-16" style={{ backgroundImage: `url(${bg.src})` }}>
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
