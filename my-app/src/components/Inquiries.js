import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import request from "../styles/request.css";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

function Inquiries() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // EmailJS configuration
    const templateParams = {
      name: name,
      email: email,
      request: request,
    };

    emailjs.send('service_b8bs8bq', 'template_z4upg0d', templateParams, 'MdiB8NYua_airKpDi')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert(`Thank you ${name}! \nForm successfully submitted!`);
        setName('');
        setEmail('');
        setRequest('');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send your request. Please try again later.');
      });
  };

  return (
    <div>
      <div id="snowflakeContainer"></div>
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
          <hr />
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
        <br />
        <div className="container-on-top">

          <div className="form">
            <form onSubmit={handleSubmit}>
              <h4 id="contact_sub">Inquiries</h4>
              <div id="recaptcha" className="g-recaptcha" data-sitekey="6LduxyoqAAAAAP0i4r6jQjBRP3p1WilmUw2YE2F6"></div>
              <label htmlFor="name">Name:</label><br />
              <input type="text" id="text" value={name} name="name" required onChange={(e) => setName(e.target.value)} /><br />
              <label htmlFor="email">Email:</label><br />
              <input type="email" id="email" value={email} name="email" required onChange={(e) => setEmail(e.target.value)} /><br />
              <label htmlFor="request">Request:</label><br />
              <textarea id="request" name="request" value={request} required onChange={(e) => setRequest(e.target.value)} style={{ width: '350px', height: '100px' }}></textarea><br />
              <input type="submit" class="g-recaptcha" 
                  data-sitekey="reCAPTCHA_site_key" 
                  data-callback='onSubmit' 
                  data-action='submit'value="Submit" id="inquiry_submit" />
            </form>
          </div>
          <br />

          <div className="contact">
            <h3 id="contact_sub">Contact us</h3>
            <p>Email: <a href="mailto:lz00962@georgiasouthern.edu">lz00962@georgiasouthern.edu</a><br /></p>
          </div>
        </div>
        <div className="latest">
          <h3>Latest</h3>
          <hr />
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
    </div>
  );
}

export default Inquiries;
