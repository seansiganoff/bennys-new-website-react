import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from '../Home/Home';
import Nav from '../Navigation/nav.js';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import QuickQuote from '../QuickQuote/QuickQuote.js';
import OurGuarantee from '../OurGuarantee/OurGuarantee.js'




function App() {
  return (
    <div className="App">
      <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/get-an-estimate' element={<QuickQuote />} />
        <Route path='/lifetime-warranty' element={<OurGuarantee />} />
      </Routes>
      <Footer />
      </>
    </div>
  );
}

export default App;
