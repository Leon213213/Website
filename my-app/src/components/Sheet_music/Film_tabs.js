import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import index from "../../styles/index.css";

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

function Accordion({ title, children, isOpen }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(isOpen);
  }, [isOpen]);

  const handleClick = () => {
    setIsActive(prev => !prev);

  };

  return (
    <div>
      <button
        className={`accordion ${isActive ? 'active' : ''}`}
        onClick={() => {
          setIsActive(!isActive);
        }}
        style={{
          borderBottom: isActive ? "0" : "1px solid black",
          borderBottomLeftRadius: isActive ? "0" : "5px",
          borderBottomRightRadius: isActive ? "0" : "5px"
        }}
      >
        {title}
      </button>
      {isActive && (
        <div className="panel">
          {children}
        </div>
      )}
    </div>
  );
}

function NestedAccordion({ title, children, isOpen }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(isOpen);
  }, [isOpen]);

  const handleClick = () => {
    setIsActive(prev => !prev);
  };

  return (
    <div>
      <button
        className={`nested-accordion ${isActive ? 'active' : ''}`}
        onClick={handleClick}
        style={{ backgroundColor: '#c8c1c1' }}
      >
        {title}
      </button>
      {isActive && (
        <div className="nested-panel">
          {children}
        </div>
      )}
    </div>
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


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  const [allOpen, setAllOpen] = useState(false);


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const handleShowAll = (e) => {
    setAllOpen(e.target.checked);
  };
  return (
    <>
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
          <h3>Tabs</h3>
          <hr />
          <button className="button" id="Jazz-tabs" onClick={() => navigate('/Jazz_tabs')}>Jazz</button>
          <button className="button" id="Animation-tabs" onClick={() => navigate('/Animation_tabs')}>Animation</button>
          <button className="button" id="Film-tabs" onClick={() => navigate('/Film_tabs')}>Film</button>
          <button className="button" id="Folk" onClick={() => navigate('/Folk')}>Foreign/Folk</button>
          <h3>Song Chords</h3>
          <hr />
          <button className="button" id="Animation-chords" onClick={() => navigate('/Animation_chords')}>Animation</button>
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
            <div class="Jazz">
              <h3 id="sub">Film Tabs</h3>
              <div className='container-side-by-side-check'>
                <input
                  id="show"
                  type="checkbox"
                  checked={allOpen}
                  onChange={handleShowAll} />
                <h3 id="h3button">Show All</h3>
              </div>
            </div>
            <div className='container-side-by-side'>
              <div className="container-on-top">
                <NestedAccordion title="A" isOpen={allOpen}>
                </NestedAccordion>
                <NestedAccordion title="B" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="C" isOpen={allOpen}>
                  <Accordion title="Collection of Short Jazz Pieces">
                    <a target="_blank" href="https://drive.google.com/file/d/17r5SyZmH5LPZgimKjwdhtf4mjq5RM7Zi/view?usp=sharing">Collection of Short Jazz Pieces.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="D" isOpen={allOpen}>
                </NestedAccordion>
                <NestedAccordion title="E" isOpen={allOpen}>
                </NestedAccordion>
                <NestedAccordion title="F" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="G" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="H" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="I" isOpen={allOpen}>
                </NestedAccordion>
                <NestedAccordion title="J" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="K" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="L" isOpen={allOpen}>
                </NestedAccordion>
                <NestedAccordion title="M" isOpen={allOpen}>
                </NestedAccordion>
              </div>
              <div className="container-on-top">
                <NestedAccordion title="N" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="O" isOpen={allOpen}>
                </NestedAccordion>
                <NestedAccordion title="P" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="Q" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="R" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="S" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="T" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="U" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="V" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="W" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="Y" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="Z" isOpen={allOpen}></NestedAccordion>
              </div>
            </div>
          </div>
          <div class="contact">
            <h3 id="contact_sub">Contact us</h3>
            <p>Email: <a href="mailto:loremipsum@gmail.com">loremipsum@gmail.com</a><br></br></p>
            <p>Phone: <a href="tel:956-312-0015">956-312-0015</a></p>
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
      <br></br>
      <footer>
        <p><b>All rights reserved &copy;</b></p>
      </footer>
    </>
  );
}
