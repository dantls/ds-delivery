import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';

const App: React.FC = () => {
  return(
    <>
      <Navbar />
      <Home />
      <GlobalStyles />
    </>
  )
}

export default App;
