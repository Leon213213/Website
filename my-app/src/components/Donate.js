// Donate.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "../styles/donate.module.css";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/donate">Donate</Link>
      <Link to="/about">About</Link>
      <Link to="/Inquiries">Inquiries</Link>
    </nav>
  );
}

export default function Donate() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    // Load the PayPal SDK script
    const loadPaypalScript = () => {
      return new Promise((resolve, reject) => {
        if (document.querySelector('script[src="https://www.paypal.com/sdk/js?client-id=BAAe9CrajeyNJeufn16TTMTreAD40GD2lT6A8ClyTV82zlut9gEMPkKAFweMxaOOxlX758mLqRvdK_ymFA&components=hosted-buttons&enable-funding=venmo&currency=USD"]')) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = "https://www.paypal.com/sdk/js?client-id=BAAe9CrajeyNJeufn16TTMTreAD40GD2lT6A8ClyTV82zlut9gEMPkKAFweMxaOOxlX758mLqRvdK_ymFA&components=hosted-buttons&enable-funding=venmo&currency=USD";
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const renderPaypalButtons = () => {
      if (window.paypal && window.paypal.HostedButtons) {
        window.paypal.HostedButtons({
          hostedButtonId: "MJZKQFWYSPVCJ"
        }).render("#paypal-container-MJZKQFWYSPVCJ");
      }
    };

    loadPaypalScript()
      .then(renderPaypalButtons)
      .catch(error => console.error('PayPal SDK failed to load:', error));

    return () => {
      // Delay clearing the PayPal container
      const delay = 300; // Delay in milliseconds

      setTimeout(() => {
        const container = document.getElementById("paypal-container-MJZKQFWYSPVCJ");
        if (container) {
          container.innerHTML = "";
        }
      }, delay);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for donating, ${name}!`);
    setName('');
    setEmail('');
    setAmount('');
  };

  return (
    <>
      <header>
        <div className="top">
          <div className="container-top">
            <img src="./images/logo.webp" alt="logo" className="img1" />
            <nav className="container-top-side-by-side">
              <button className="button" onClick={() => navigate('/')}>Home</button>
              <button className="button" onClick={() => navigate('/Donate')}>Donate</button>
              <button className="button" onClick={() => navigate('/About')}>About</button>
              <button className="button" onClick={() => navigate('/Inquiries')}>Inquiries</button>
            </nav>
            <button id="dark" onClick={() => setIsDarkMode(!isDarkMode)}>Dark mode</button>
            <img src="./images/logo.webp" alt="logo" className="img2" />
          </div>
        </div>
        <br />
      </header>
      <div className="container-side-by-side">
        <div className="genre">
        <h3>Piano</h3>
          <hr></hr>
          <button className="button" id="Jazz" onClick={() => navigate('/Jazz')}>Jazz</button>
          <button className="button" id="Animation" onClick={() => navigate('/Animation')}>Animation</button>
          <button className="button" id="Film" onClick={() => navigate('/Film')}>Film</button>
          <button className="button" id="Foreign" onClick={() => navigate('/Foreign')}>Foreign</button>
          <button className="button" id="Classical" onClick={() => navigate('/Classical')}>Classical</button>
          <h3 id="genre_sub">Tabs</h3>
          <hr />
          <button className="button" id="Jazz-tabs" onClick={() => navigate('/Jazz_tabs')}>Jazz</button>
          <button className="button" id="Animation_tabs" onClick={() => navigate('/Animation_tabs')}>Animation</button>
          <button className="button" id="Film-tabs" onClick={() => navigate('/Film_tabs')}>Film</button>
          <button className="button" id="Folk" onClick={() => navigate('/Folk')}>Foreign/Folk</button>
          <h3 id="genre_sub">Song Chords</h3>
          <hr />
          <button className="button" id="Animation_chords" onClick={() => navigate('/Animation_chords')}>Animation</button>
          <button className="button" id="ForeignFolk" onClick={() => navigate('/ForeignFolk')}>Foreign/Folk</button>
          <button className="button" id="Oldies" onClick={() => navigate('/Oldies')}>Oldies</button>
        
        </div>
        <div className="container-on-top">
          <div className="container">
            <div>
              <form className={`${styles.donate} ${isDarkMode ? styles.dark : ''}`} onSubmit={handleSubmit}>
                  <div id="paypal-container-MJZKQFWYSPVCJ"></div>
              </form>
              <div id="par">
                <p>We appreciate your support in helping us keep this site running!</p>
              </div>
            </div>
          </div>
          <div className="contact">
            <h3 id="contact_sub">Contact us</h3>
            <p>Email: <a href="mailto:lz00962@georgiasouthern.edu">lz00962@georgiasouthern.edu</a><br></br></p>
          </div>
        </div>
        <div className="latest">
        <h3>Latest</h3>
          <hr></hr>
          <ul id="list">
            <li style={{ marginBottom: 35 }}><a target="_blank" href="https://drive.google.com/file/d/16WWLa6hxyBCkuCxH6j5beXHT9Q43-glr/view?usp=sharing">Farewell To Sue.pdf</a></li>
            <li style={{ marginBottom: 35 }}><a target="_blank" href="https://drive.google.com/file/d/1dun1X-8CgHSJfTgHjGjdJczHCg5jdUsi/view?usp=sharing">Daytime Drama.pdf</a></li>
            <li style={{ marginBottom: 35 }}><a target="_blank" href="https://drive.google.com/file/d/1dFftxaEDjEOOJ76eDo8LJ-2WottfA_V8/view?usp=drive_link">Kaisou Narration.pdf</a></li>
            <li style={{ marginBottom: 35 }}><a target="_blank" href="https://drive.google.com/file/d/1XPeIsx1NqmoAmbQs51M1NmipQ7nWNg3v/view?usp=drive_link">Let's Stay Together Itsumou.pdf</a></li>
            <li style={{ marginBottom: 35 }}><a target="_blank" href="https://drive.google.com/file/d/1epkbhdGTUMMq1fYAFL4XnHyjebXQ4IWT/view?usp=drive_link">Song of the Princess.pdf</a></li>
            <li style={{ marginBottom: 35 }}><a target="_blank" href="https://drive.google.com/file/d/1sHqcRAwAuNRiPq6I5B6MaguMg-U4RaIK/view?usp=drive_link">Diabolik Lovers - Martyr.pdf</a></li>
          </ul>
        </div>
      </div>
      <footer>
        <br />
        <p><b>All rights reserved &copy;</b></p>
      </footer>
    </>
  );
}
