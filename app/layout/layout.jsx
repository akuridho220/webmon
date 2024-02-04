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
          <div className="hero flex flex-col items-center  w-full min-h-screen lg:mt-20 mt-16" style={{ backgroundImage: `url(${bg.src})` }}>
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
