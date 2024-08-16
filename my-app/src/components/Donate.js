import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    console.log("Donation submitted!");

    // Show a pop-up message
    alert(`Thank you for donating ${name}!`);
    setName('');
    setEmail('');
    setAmount('');
  };

  return (
    <>
      <div id="snowflakeContainer"></div>
      <header>
        <div class="top">
          <div className="container-top">
            <img src="./images/logo.webp" alt="logo" className="img1"></img>
            <nav className="container-top-side-by-side">
              <button className="button" onClick={() => navigate('/')}>Home</button>
              <button className="button" onClick={() => navigate('/Donate')}>Donate</button>
              <button className="button" onClick={() => navigate('/About')}>About</button>
              <button className="button" onClick={() => navigate('/Inquiries')}>Inquiries</button>
            </nav>
            <button id="dark" onClick={() => setIsDarkMode(!isDarkMode)}>Dark mode</button>
            <img src="./images/logo.webp" alt="logo" className="img2"></img>
          </div>
        </div>

        <br></br>

      </header>
      <div class='container-side-by-side'>
        <div class="genre">
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
              <form onSubmit={handleSubmit} className={`${styles.donate} ${isDarkMode ? styles.dark : ''}`}>
                <h4 id="contact_sub">Donate</h4>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" className={styles.name} value={name} name="name" required onChange={(e) => setName(e.target.value)} /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" className={styles.email} value={email} name="email" required onChange={(e) => setEmail(e.target.value)} /><br />
                <label htmlFor="amount">Donation Amount ($):</label><br />
                <input type="number" id="amount" value={amount} name="amount" className={styles.input} required onChange={(e) => setAmount(e.target.value)} /><br />
                <input type="submit" value="Donate Now" id="butt" className={styles.submitButton} />
              </form>
              <div id="par">
                <p>We appreciate your support in helping us keep this site running!</p>
              </div>
            </div>
          </div>
          <div className="contact">
            <h3 id="contact_sub">Contact us</h3>
            <p>Email: <a href="mailto:loremipsum@gmail.com">loremipsum@gmail.com</a><br></br></p>
            <p>Phone: <a href="tel:956-312-0015">956-312-0015</a></p>
            <p><b>All rights reserved &copy;</b></p>
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
