import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Our Accompaniment Service</h1>
        <div className="nav-buttons">
          <button>About Us</button>
          <button>Contact</button>

          <div className="dropdown">
            <button>Services</button>
            <div className="dropdown-content">
              <a href="#venting">Venting</a>
              <a href="#be-there">Be There</a>
              <a href="#professional">Professional Coffee Chats</a>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="section-container">
          <div className="section white" id="venting">
            <img src="src/assets/vent.png" alt="Venting" className="section-image" />
            <div className="section-content">
              <h2>Venting</h2>
              <p>Feeling overwhelmed or just need to talk? We're here to listen and provide a supportive ear.</p>
            </div>
          </div>

          <div className="section gold" id="be-there">
            <img src="/path/to/hanging-out-image.jpg" alt="Be There" className="section-image" />
            <div className="section-content">
              <h2>Be There</h2>
              <p>Enjoy in-person company without judgment. Whether it's an event or a casual hangout, we’re here for you.</p>
            </div>
          </div>

          <div className="section green" id="professional">
            <img src="/path/to/coffee-chat-image.jpg" alt="Professional Coffee Chats" className="section-image" />
            <div className="section-content">
              <h2>Professional Coffee Chats</h2>
              <p>Need advice or a professional chat? Let’s discuss your goals and ideas over a coffee.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
