import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Cart from './Pages/Cart/Cart';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';

function App() {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>    
    {showLogin ? <LoginPopUp 
    setShowLogin={setShowLogin} />
    :<> </>}
     <div className="App">
       <Navbar setShowLogin={setShowLogin} />
       <Routes>
           <Route path='/' element={<Home />}  />
           <Route path='/Cart' element={<Cart />} />
           <Route path='/Order' element={<PlaceOrder />} />

       </Routes>
    </div>
    <Footer />
    </>

  );
}

export default App;
