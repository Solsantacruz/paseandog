

import SiderBar from '../components/SiderBar';
import Calendary from '../components/Calendary';

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Navbar Vertical */}
      <SiderBar />

      {/* Calendario */}
      <Calendary />
      
    </div>
  );
};

export default Home;
