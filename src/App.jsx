import React from 'react';
import Hero from './components/hero';
import Navbar from './Navbar';
import Work from './components/Work';
import TechnicianProfile from './components/TechnicianProfile';
import TechnicianTable from './components/TechnicianTable';
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex space-x-4 justify-center p-6"></div>
      <TechnicianProfile />
      <Hero />
      <div/>
      <Work />
      <TechnicianTable />
    </div>
  );
}

export default App;