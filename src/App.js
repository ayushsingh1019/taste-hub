import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Order from './pages/Order';

function App() {
  return (
    <div className="App">
      <HashRouter  basename='/'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/order' element={<Order />} />
          <Route path='/success' element={<ProtectedRoute element={<Success />} />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
