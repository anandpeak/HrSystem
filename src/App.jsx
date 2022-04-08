import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Test from './pages/games/Test';
import Switch from './pages/games/Switch';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes >
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/game/:id/test"  element={<Test />} />
        <Route exact path="/game/:id/switch" element = {<Switch/>} />
        
      </Routes>
    </>
  );
}

export default App;
