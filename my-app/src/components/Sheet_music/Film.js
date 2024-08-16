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
              <h3 id="sub">Film</h3>
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
                  <Accordion title="American Dad">
                    <a target="_blank" href="https://drive.google.com/file/d/1eD-2w2tU0X-1snUeZCb83RQVmDvqLAvH/view?usp=drive_link">American Dad - Main Theme.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="B" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="C" isOpen={allOpen}>

                </NestedAccordion>
                <NestedAccordion title="D" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="E" isOpen={allOpen}>

                </NestedAccordion>
                <NestedAccordion title="F" isOpen={allOpen}>
                  <Accordion title="Family Guy">
                    <a target="_blank" href="https://drive.google.com/file/d/1fTzoXAQYBmHxQsHplWJZ7m5ESXSFe9cK/view?usp=drive_link">Family Guy - Main Theme.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="G" isOpen={allOpen}>
                  <Accordion title="Grease">
                    <a target="_blank" href="https://drive.google.com/file/d/1Fmibg3-g2FxxjiozMx6CiQpxvIkxMkEN/view?usp=drive_link">Hopelessly Devoted.pdf</a><br></br>
                    <a target="_blank" href="https://drive.google.com/file/d/1qMRKD_rl14SsMtCy4l7sf_KIlI-qFiff/view?usp=drive_link">There are Worse Things I Could.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="H" isOpen={allOpen}>
                  <Accordion title="Harry Potter">
                    <a target="_blank" href="https://drive.google.com/file/d/1zGdMOHq2R3QdnNKaxUd8SllIqQv-uhSZ/view?usp=drive_link">Harry Potter - Main Theme Advanced.pdf</a><br></br>
                    <a target="_blank" href="https://drive.google.com/file/d/1cfBb3ILU2siEXra8tEukOdHukkVW0VX6/view?usp=drive_link">Harry Potter Sorcerers Stone Album.pdf</a><br></br>
                    <a target="_blank" href="https://drive.google.com/file/d/1ZteHGXI9ySicSqYNZXaV6FGdIEM6wKsU/view?usp=drive_link">Hogwart's March.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="I" isOpen={allOpen}>
                  <Accordion title="Island">
                    <a target="_blank" href="https://drive.google.com/file/d/1h0wdXdC0D9U1pzlBS53QYu59RtnzCX2_/view?usp=drive_link">My Name is Lincoln.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="J" isOpen={allOpen}>
                  <Accordion title="James Bond">
                    <a target="_blank" href="https://drive.google.com/file/d/1riq88FeAm8gCvCKM6hNRurDyH1UbN74G/view?usp=drive_link">James Bond Main Theme.pdf</a>
                  </Accordion>
                  <Accordion title="Jurassic Park">
                    <a target="_blank" href="https://drive.google.com/file/d/1oI4aT3nNwzXufSQOKk56n3JWyLKBzJ8g/view?usp=drive_link">Jurasic Park - Main Theme.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="K" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="L" isOpen={allOpen}>
                  <Accordion title="Lord of the Rings">
                    <a target="_blank" href="https://drive.google.com/file/d/1fHzDgNk9KJVFlUcTvyOHkBjhFg2reY_e/view?usp=drive_link">Lord of the Rings.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="M" isOpen={allOpen}>

                </NestedAccordion>
              </div>
              <div className="container-on-top">
                <NestedAccordion title="N" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="O" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="P" isOpen={allOpen}>
                  <Accordion title="Pirates of the Carribean">
                    <a target="_blank" href="https://drive.google.com/file/d/1JjgVaHsBH2VxhdCF1Eyd6_zmXTJ_OviF/view?usp=drive_link">Medallion Calls.pdf</a><br></br>
                    <a target="_blank" href="https://drive.google.com/file/d/1qItnVGiOV2BrRw5j_mdynSUBX4_-1Ayj/view?usp=drive_link">Pirates of the Carribean Medley.pdf</a><br></br>
                    <a target="_blank" href="https://drive.google.com/file/d/1rXi1MsX0MrUBwh43f1iXifJyJuzJneCz/view?usp=drive_link">The Kraken.pdf</a><br></br>
                    <a target="_blank" href="https://drive.google.com/file/d/1dps46uaU3aRixNisod0qjF8XbyxFmMBs/view?usp=drive_link">Two Hornpikes.pdf</a>
                  </Accordion>
                  <Accordion title="Parks and Recs">
                    <a target="_blank" href="https://drive.google.com/file/d/1H5GL_l-qepl-A00FF-mUl3F2Hfxs_cUM/view?usp=drive_link">Parks and Recs - Main Theme.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="Q" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="R" isOpen={allOpen}></NestedAccordion>
                <NestedAccordion title="S" isOpen={allOpen}>
                  <Accordion title="Star Wars">
                    <a target="_blank" href="https://drive.google.com/file/d/1sMpgXg0IlnIY1xmcdhWDrS0WeGFZJl-8/view?usp=drive_link">Star Wars Medley.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="T" isOpen={allOpen}>
                  <Accordion title="Titanic">
                    <a target="_blank" href="https://drive.google.com/file/d/1E_KNqQjYaFJSPoQnJx7kwz1xtVgeIMrU/view?usp=drive_link">Titanic - Main Theme.pdf</a>
                  </Accordion>
                  <Accordion title="Trailer Park Boys">
                    <a target="_blank" href="https://drive.google.com/file/d/1uNphX4tTtfITV-XFnTt6M2uADjKlPUhF/view?usp=drive_link">Trailer Park Boys - Main Theme.pdf</a>
                  </Accordion>
                </NestedAccordion>
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
