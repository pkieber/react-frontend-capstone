import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Order from './pages/Order';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;

