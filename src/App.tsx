import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Venting from './Venting.tsx';
import BeThere from './BeThere.tsx';
import CoffeeChats from './CoffeeChats.tsx';

function App() {
  return (
    <Router>
      <header>
        <h1>Our Accompaniment Service</h1>
        <div className="nav-buttons">
          <button><Link to="/">Home</Link></button>
          <button><Link to="/about">About Us</Link></button>
          <button><Link to="/contact">Contact</Link></button>
          <div className="dropdown">
            <button>Services</button>
            <div className="dropdown-content">
              <Link to="/venting">Venting</Link>
              <Link to="/be-there">Be There</Link>
              <Link to="/professional">Professional Coffee Chats</Link>
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={(
          <div className="container">
            <div className="section-container">
              
              <Link to="/venting" className="section-link">
                <div className="section white" id="venting">
                  <img src="src/assets/vent.png" alt="Venting" className="section-image" />
                  <div className="section-content">
                    <h2>Venting</h2>
                    <p>Feeling overwhelmed or just need to talk? We're here to listen and provide a supportive ear.</p>
                  </div>
                </div>
              </Link>

              <Link to="/be-there" className="section-link">
                <div className="section gold" id="be-there">
                  <img src="/path/to/hanging-out-image.jpg" alt="Be There" className="section-image" />
                  <div className="section-content">
                    <h2>Be There</h2>
                    <p>Enjoy in-person company without judgment. Whether it's an event or a casual hangout, we’re here for you.</p>
                  </div>
                </div>
              </Link>

              <Link to="/professional" className="section-link">
                <div className="section green" id="professional">
                  <img src="/path/to/coffee-chat-image.jpg" alt="Professional Coffee Chats" className="section-image" />
                  <div className="section-content">
                    <h2>Professional Coffee Chats</h2>
                    <p>Need advice or a professional chat? Let’s discuss your goals and ideas over a coffee.</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        )} />

        <Route path="/venting" element={<Venting />} />
        <Route path="/be-there" element={<BeThere />} />
        <Route path="/professional" element={<CoffeeChats />} />
      </Routes>
    </Router>
  );
}

export default App;
