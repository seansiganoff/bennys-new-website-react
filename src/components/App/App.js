import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Guarantee from '../Guarantee/Guarantee';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pictures-and-videos' element={<Gallery />} />
        <Route path='/our-guarantee' element={<Guarantee />} />
      </Routes>
      <Footer />
      </>
    </div>
  );
}

export default App;
