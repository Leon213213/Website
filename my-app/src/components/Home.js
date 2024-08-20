import home_js from "./home_js.js";
import index from "../styles/index.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};
function login() {
  <nav>
    <Link to="/login">Login</Link>
    </nav>
}



export default function Home() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  let navigate = useNavigate();

  return (
    <>
      <header>
        <div class="top">
          <div className="container-top">
            <img src="./images/logo.webp" class="stuck-image" alt="logo" className="img1"></img>
            <nav className="container-top-side-by-side">
              <button className="button" onClick={() => navigate('/')}>Home</button>
              <button className="button" onClick={() => navigate('/Donate')}>Donate</button>
              <button className="button" onClick={() => navigate('/About')}>About</button>
              <button className="button" onClick={() => navigate('/Inquiries')}>Inquiries</button>
            </nav>
            {/*<div className="login">*/}
            <button id="dark" onClick={() => setIsDarkMode(!isDarkMode)}>Dark mode</button>
             {/*</div>*/}
            <img src="./images/logo.webp" alt="logo" class="stuck-image" className="img2"></img>
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
          <div class="search">
            <div class="container-search">
              <h4>Search:</h4>
              <input type="search"></input>
              <button className="button">Search</button>
            </div>
          </div>
          <div class="paragraph">
            <div>
              <h4 id="sub">Featured</h4>
              <br></br>
              <div className="videos">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/wi-0zQyw33Q?si=Chb0bX6YP50OSHpS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="300" height="200" src="https://www.youtube.com/embed/oQa8gBcJiY8?si=WRvXSPBKpSVJN0HV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
            <br></br>
            <br></br>
            <div>
              <h3 id="subtitles"><i>Piano Sheet Music</i></h3>
              <p id="description">Welcome to Leo's Sheet Music and Tabs! When it comes to piano sheet music, we have a wide selection of music
                across genres, countries, and type. Access to all of our collection is free and we encourage sending any sheet music
                that you might have so that we can expand our collection by contacting us by email. And if you find that you enjoy our website,
                feel free to leave a donation, regardless of size. Thank you and enjoy!
              </p>
            </div>
            <div>
              <h3 id="subtitles"><i>Guitar Tabs and Chords</i></h3>
              <p id="description">Our guitar tabs might not be as expansive as our sheet music but more will be added weekly. Again, we encourage user donations
                and sharing of any tabs or guitar chords that you would be willing to share with everyone else!</p>
            </div>
            <br></br>
            <br></br>

          </div>
          <div className="contact">
            <h3 id="contact_sub">Contact us</h3>
            <p>Email: <a href="mailto:lz00962@georgiasouthern.edu">lz00962@georgiasouthern.edu</a><br></br></p>
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
    </>
  );
}
