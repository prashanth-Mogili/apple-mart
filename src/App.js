import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
import Products from './components/Products';
import Contact from './components/Contact';
import Product from './components/Product';

function App() {
  return (
    <>
     <Header/>
      <Routes>        
        <Route path='/' element={<><Home/><Products/><About/><Contact/> </>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path = '/products/:id' element = {<Product/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
