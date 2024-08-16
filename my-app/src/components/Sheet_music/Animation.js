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

function redirectToPage(id) {
  const pages = {
    'Jazz': "http://localhost:3000/Jazz/",
    'Animation': "http://localhost:3000/Animation/",
    'Film': "http://localhost:3000/Film/",
    'Meme': "http://localhost:3000/Meme/",
    'Foreign': "http://localhost:3000/Foreign/",
    'Classical': "http://localhost:3000/Classical/",
    'Jazz-tabs': "http://localhost:3000/Jazz-tabs/",
    'Animation-tabs': "http://localhost:3000/Animation-tabs/",
    'Film-tabs': "http://localhost:3000/Film-tabs/",
    'Folk': "http://localhost:3000/Folk/",
    'Animation-chords': "http://localhost:3000/Animation-chords/",
    'ForeignFolk': "http://localhost:3000/ForeignFolk/",
    'Oldies': "http://localhost:3000/Oldies/",
  };
  window.location.href = pages[id];
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
  const [allOpen, setAllOpen] = useState(false); // State to control the "Show All" functionality
  let navigate = useNavigate();


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

      <div className='container-side-by-side'>
        <div className="genre">
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
              <h3 id="sub">Animations</h3>
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
                <NestedAccordion title="A" isOpen={allOpen} >
                  <Accordion title="Amatsuki - Namae no Nai Michi">
                    <a target="_blank" href="https://drive.google.com/file/d/1YH0y8_BxskJe9usWhMhttVD7o7cQqpqj/view?usp=sharing">Amatsuki - Namae no Nai Michi.pdf</a>
                  </Accordion>
                  <Accordion title="Angel Beats - Theme of SSS">
                    <a target="_blank" href="https://drive.google.com/file/d/14L7qJWKS2ocyUxBQ4wa7yc6s1KZdZB4U/view?usp=drive_link">Angel Beats - Theme of SSS.pdf</a>
                  </Accordion>
                  <Accordion title="Asura's Wrath - In Your Belief">
                    <a target="_blank" href="https://drive.google.com/file/d/1LzarqAYoMHP3UJn8KQogvcZKAS7eKgMD/view?usp=sharing">Asura's Wrath - In Your Belief.pdf</a>
                  </Accordion>
                  <Accordion title="Attack on Titan - Guren no Yumiya">
                    <a target="_blank" href="https://drive.google.com/file/d/1C2hu48UpBxDuVG2jT23U5GFHYq0p0D2o/view?usp=sharing">Attack on Titan - Guren no Yumiya.pdf</a>
                  </Accordion>
                  <Accordion title="Air - Bird's Poem">
                    <a target="_blank" href="https://drive.google.com/file/d/1UDYI0Unj2ECyaTT8qHiVbZU4GBQZl5-t/view?usp=drive_link">Air - Bird's Poem.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="B" isOpen={allOpen} >
                  <Accordion title="Baka to Test to Shoukanjuu - Otome Tachi no Inori">
                    <a target="_blank" href="https://drive.google.com/file/d/1zWc_PfcHcrxmgLzu2bMhYJMy4eGorYLW/view?usp=sharing">Baka to Test to Shoukanjuu - Otome Tachi no Inori.pdf</a>
                  </Accordion>
                  <Accordion title="Beauty and the Beast">
                    <a target="_blank" href="https://drive.google.com/file/d/1wTUmwdtrj0KVE1Vmlc-46ltSFeksUMHM/view?usp=sharing">Beauty and the Beast Live Action Main Theme.pdf</a>
                  </Accordion>
                  <Accordion title="Baccano! - In the Speakeasy">
                    <a target="_blank" href="https://drive.google.com/file/d/1zbDv5n_sA5Etk9432FY_XhtzHUhXtNjR/view?usp=sharing">Baccano! - In the Speakeasy.pdf</a>
                  </Accordion>
                  <Accordion title="Blood+ - Sadness">
                    <a target="_blank" href="https://drive.google.com/file/d/1-OdxPsuOweQG9UugT4vZDXQjN8cSHRO7/view?usp=drive_link">Blood+ - Sadness.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="C" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Corpse Bride - Piano Duet">
                    <a target="_blank" href="https://drive.google.com/file/d/1p5_UtfT7veBYeJ8nGqlqMt2C-ZF7fNgI/view?usp=sharing">Corpse Bride Piano Duet.pdf</a>
                  </Accordion>
                  <Accordion title="Corpse Bride - Victors Piano Solo">
                    <a target="_blank" href="https://drive.google.com/file/d/1xwRW8deAff-v87THmJ9VTb3KD4UqF-yN/view?usp=sharing">Corpse Bride Victors Piano Solo.pdf</a>
                  </Accordion>
                  <Accordion title="Castlevania - Bloody Tears">
                    <a target="_blank" href="https://drive.google.com/file/d/1AfDYIQkcFrAq9su54-teCO7eAjlb3FFt/view?usp=drive_link">Castlevania - Bloody Tears.pdf</a>
                  </Accordion>
                  <Accordion title="Chobits - Ningyo Hime">
                    <a target="_blank" href="https://drive.google.com/file/d/1s0v8JR7S1b8PHMPujAnRZXlfqLlQkNym/view?usp=drive_link">Chobits - Ningyo Hime.pdf</a>
                  </Accordion>
                  <Accordion title="Clannad - Medley">
                    <a target="_blank" href="https://drive.google.com/file/d/12yNw-SDAIx04Tlh-y8R6ovv6ir1z1VrP/view?usp=drive_link">Clannad - Medley.pdf</a>
                  </Accordion>
                  <Accordion title="Code Geass - Cold Nobility">
                    <a target="_blank" href="https://drive.google.com/file/d/1VmLu1crad8ZOjC_NuarKSd9o_rq-3AKt/view?usp=drive_link">Code Geass - Cold Nobility.pdf</a>
                  </Accordion>
                  <Accordion title="Code Geass - Continued Story">
                    <a target="_blank" href="https://drive.google.com/file/d/1L8qkhQeqegMZX21it8nuQrsF6KALptxy/view?usp=drive_link">Code Geass - Continued Story.pdf</a>
                  </Accordion>
                  <Accordion title="Code Geass - If I Were a Bird">
                    <a target="_blank" href="https://drive.google.com/file/d/1UHdrSHhndRBOi2Oqhxopn3PDvPMofCVm/view?usp=drive_link">Code Geass - If I Were a Bird.pdf</a>
                  </Accordion>
                  <Accordion title="Code Geass - Stories">
                    <a target="_blank" href="https://drive.google.com/file/d/1QJsw33-WxlEXoDgEGIIZuvY2oU_2cqMB/view?usp=drive_link">Code Geass - Stories.pdf</a>
                  </Accordion>
                  <Accordion title="Corpse Party - Slaughter of Sorrow">
                    <a target="_blank" href="https://drive.google.com/file/d/1SpbOYFj6qVLHa0znbfvk_nnOZXgiW2IR/view?usp=drive_link">Corpse Party - Slaughter of Sorrow.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="D" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Death Parade - Moonlit Night">
                    <a target="_blank" href="https://drive.google.com/file/d/1pMX3yWd51R-dq3WUBwBOsLjhyefJjZ2u/view?usp=drive_link">Death Parade - Moonlit Night.pdf</a>
                  </Accordion>
                  <Accordion title="Darker Than Black - Yin no Piano">
                    <a target="_blank" href="https://drive.google.com/file/d/1OoRZ1NF1oq5jy9A7kuDlDHT_YpTuetxs/view?usp=sharing">Darker Than Black - Yin no Piano.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="E" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Elfen Lied - Lilium">
                    <a target="_blank" href="https://drive.google.com/file/d/1b40exAFwCOuZKnOiL4nFK3l19gO39XOP/view?usp=drive_link">Elfen Lied - Lilium.pdf</a>
                  </Accordion>
                  <Accordion title="Evangelion - Thanatos">
                    <a target="_blank" href="https://drive.google.com/file/d/1iBuTO51G_-cVD2iKZfS1YYj-jLBZYtql/view?usp=drive_link">Evangelion - Thanatos.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="F" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Fairy Tail - Past Story">
                    <a target="_blank" href="https://drive.google.com/file/d/1jQPmtTFMMdJb3uORroO3Tyyoi2CNGrL7/view?usp=drive_link">Fairy Tail - Past Story.pdf</a>
                  </Accordion>
                  <Accordion title="Fate/Zero - Oath Sign">
                    <a target="_blank" href="https://drive.google.com/file/d/1YYGY-UitbsF1Jb-MSol4zVhrZPnz469j/view?usp=drive_link">Fate/Zero - Oath Sign.pdf</a>
                  </Accordion>
                  <Accordion title="Final Fantasy VII - Tifa's Theme">
                    <a target="_blank" href="https://drive.google.com/file/d/1J_EgPiuHci3hQZJFHLjjMcpHdPg0psjD/view?usp=drive_link">Final Fantasy VII - Tifa's Theme.pdf</a>
                  </Accordion>
                  <Accordion title="Final Fantasy X - To Zanarkand">
                    <a target="_blank" href="https://drive.google.com/file/d/1HTg7BezELz98aAva2hve80oOSVhbWm2o/view?usp=drive_link">Final Fantasy X - To Zanarkand.pdf</a>
                  </Accordion>
                  <Accordion title="Frozen - Let it Go">
                    <a target="_blank" href="https://drive.google.com/file/d/16OF63x5meXg58eHAu1XYu5jwwPG1y7M7/view?usp=sharing">Frozen - Let it Go.pdf</a>
                  </Accordion>
                  <Accordion title="From Up On Poppy Hill Album">
                    <a target="_blank" href="https://drive.google.com/file/d/1wFegn8KzvAD-74WVP7mJJrNdAbzp7J_n/view?usp=drive_link">From Up On Poppy Hill Album.pdf</a>
                  </Accordion>
                  <Accordion title="Fullmetal Alchemist - Nocturne of Amastesis">
                    <a target="_blank" href="https://drive.google.com/file/d/16xA2vOfYZl0iEHGZXyDq7ZxbrEQc_H7A/view?usp=drive_link">Fullmetal Alchemist - Nocturne of Amastesis.pdf</a>
                  </Accordion>
                  <Accordion title="Fullmetal Alchemist Brotherhood - Brothers">
                    <a target="_blank" href="https://drive.google.com/file/d/1azjWm_784jyGCH42o-vSiEXP1sicFY4q/view?usp=drive_link">Fullmetal Alchemist Brotherhood - Brothers.pdf</a>
                  </Accordion>
                  <Accordion title="Fullmetal Alchemist Brotherhood - Lapis Philosophorum">
                    <a target="_blank" href="https://drive.google.com/file/d/1cXPbquyxtGTdo9A9i-2sUXby1znCher3/view?usp=drive_link">Fullmetal Alchemist Brotherhood - Lapis Philosophorum.pdf</a>
                  </Accordion>
                  <Accordion title="Futari - Two of Us">
                    <a target="_blank" href="https://drive.google.com/file/d/1dpDDKfkaW3oslIVm3HFqLcugr87dcqEw/view?usp=drive_link">Futari - Two of Us.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="G" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Genshin Impact - Fischl's Domain Sorrow BGM">
                    <a target="_blank" href="https://drive.google.com/file/d/1UgnxgKjY0Y8C3dGrenTY-F2LCV6fnDV6/view?usp=sharing">Genshin Impact - Fischl's Domain Sorrow BGM.pdf</a>
                  </Accordion>
                  <Accordion title="Golden Time - Sweet and Sweet Cherry">
                    <a target="_blank" href="https://drive.google.com/file/d/1wwva9dXLp1vzoZe6gczZzIoxMa-FBCZS/view?usp=drive_link">Golden Time - Sweet and Sweet Cherry.pdf</a>
                  </Accordion>
                  <Accordion title="Grave of The Fireflies">
                    <a target="_blank" href="https://drive.google.com/file/d/1rkoKjwLszAfnmW1PtDqXPG53fg-YhHjJ/view?usp=sharing">Grave of The Fireflies.pdf</a>
                  </Accordion>
                  <Accordion title="Guilty Crown - Dearly Beloved">
                    <a target="_blank" href="https://drive.google.com/file/d/1B6IAR7ukNh7FULhbCQ-nEtyfVblyiVbY/view?usp=drive_link">Guilty Crown - Dearly Beloved.pdf</a>
                  </Accordion>
                  <Accordion title="Guilty Crown - Departures">
                    <a target="_blank" href="https://drive.google.com/file/d/1C3sIf-DdxYoW93NzXqIsy2owqThTXWkr/view?usp=drive_link">Guilty Crown - Departures.pdf</a>
                  </Accordion>
                  <Accordion title="Guilty Crown - Euterpe">
                    <a target="_blank" href="https://drive.google.com/file/d/1BMcbvu6RGl3hL842gZ3OjdAyhKIm_cB0/view?usp=drive_link">Guilty Crown - Euterpe.pdf</a>
                  </Accordion>
                  <Accordion title="Guilty Crown - The Everlasting Guilty Crown">
                    <a target="_blank" href="https://drive.google.com/file/d/1gZJgsNyiJJFHOZajqC5N6avPHOOqPDRu/view?usp=drive_link">Guilty Crown - The Everlasting Guilty Crown.pdf</a>
                  </Accordion>
                  <Accordion title="Gundam F91 - Eternal Wind">
                    <a target="_blank" href="https://drive.google.com/file/d/1tMUqAulfRGaVuxA5XEZyNE2mTiHYtmcZ/view?usp=sharing">Gundam F91 - Eternal Wind.pdf</a>
                  </Accordion>
                  <Accordion title="Gundam Seed - Haru no Theme">
                    <a target="_blank" href="https://drive.google.com/file/d/1mJRmqoPrKs-2JtK3sUrmX9hjckwtDILc/view?usp=drive_link">Gundam Seed - Haru no Theme.pdf</a>
                  </Accordion>
                  <Accordion title="Gundam Seed - Kanashimi">
                    <a target="_blank" href="https://drive.google.com/file/d/1sTOoIfu4TcJxvLxsCE-q39bGsBE-jI64/view?usp=drive_link">Gundam Seed - Kanashimi.pdf</a>
                  </Accordion>
                  <Accordion title="Gundam Seed - Wakare no Theme">
                    <a target="_blank" href="https://drive.google.com/file/d/1fTqeeGc6L4ihpf-pMJl8BKFa02si3N0o/view?usp=drive_link">Gundam Seed - Wakare no Theme.pdf</a>
                  </Accordion>
                  <Accordion title="Gundam Seed Destiny- Yuujou no Theme">
                    <a target="_blank" href="https://drive.google.com/file/d/1J24JBYjFvIT81U04zXoBzJo2MqyyC1A_/view?usp=drive_link">Gundam Seed Destiny- Yuujou no Theme.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="H" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="How to Train A Dragon - Romatic Flight">
                    <a target="_blank" href="https://drive.google.com/file/d/1xYfakUERocpFzWR3jIAM9RndVoEa9yBY/view?usp=sharing">How to Train A Dragon - Romatic Flight.pdf</a>
                  </Accordion>
                  <Accordion title="Howl's Moving Castle - Main Theme">
                    <a target="_blank" href="https://drive.google.com/file/d/1COEaSSo5ao3OUqunMJTBDIqF4OPWu1oX/view?usp=drive_link">Howl's Moving Castle - Main Theme.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="I" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="InuYasha - To Love's End">
                    <a target="_blank" href="https://drive.google.com/file/d/18J8FR2XVpBd9lJ8AF8dr0aWhkSoiapJb/view?usp=drive_link">InuYasha - To Love's End.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="J" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Jigoku Shoujo - Kumo to Rouba to Shoujo">
                    <a target="_blank" href="https://drive.google.com/file/d/1yBNg1BayfJ9TN1z2O2Hx79wDfTJk1iXX/view?usp=drive_link">Jigoku Shoujo - Kumo to Rouba to Shoujo.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="K" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Kill la Kill - Blumenkranz">
                    <a target="_blank" href="https://drive.google.com/file/d/1EZE3bZmd8IuP3oIhuHqPQgrMsxo5aX4N/view?usp=drive_link">Kill la Kill - Blumenkranz</a>
                  </Accordion>
                  <Accordion title="Kimi Ga Nozomu Eien - Blue Tears">
                    <a target="_blank" href="https://drive.google.com/file/d/1EIIw9nBVfAzjvcP_XQPGdx2Rzc4tzCak/view?usp=drive_link">Kimi Ga Nozomu Eien - Blue Tears</a>
                  </Accordion>
                  <Accordion title="Kimi Ga Nozomu Eien - Kanashimi">
                    <a target="_blank" href="https://drive.google.com/file/d/1yf_4u30qsT70ncaSs-9AdKnwFbogLYNh/view?usp=drive_link">Kimi Ga Nozomu Eien - Kanashimi</a>
                  </Accordion>
                  <Accordion title="Kimi Ga Nozomu Eien - Precious Memories">
                    <a target="_blank" href="https://drive.google.com/file/d/1STCHIjW0yok3UeWNcxu4epwM8YF4Rq00/view?usp=drive_link">Kimi Ga Nozomu Eien - Precious Memories</a>
                  </Accordion>
                  <Accordion title="Kimi Ga Nozomu Eien - Zaiakukan">
                    <a target="_blank" href="https://drive.google.com/file/d/1y_VwGDsZiPcYfei_zxGhc99K-gjut6jB/view?usp=drive_link">Kimi Ga Nozomu Eien - Zaiakukan</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="L" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Laputa - Castle in the Sky - Main Theme">
                    <a target="_blank" href="https://drive.google.com/file/d/1XaCwNwd9qxv8meaMcn0e-7hX9pyYfjt8/view?usp=drive_link">Laputa - Castle in the Sky - Main Theme.pdf</a>
                  </Accordion>
                  <Accordion title="Laputa - Innocent">
                    <a target="_blank" href="https://drive.google.com/file/d/1OOAtFYfsqdwCLY_LswuNVBcxNl_0vpQX/view?usp=drive_link">Laputa - Innocent.pdf</a>
                  </Accordion>
                  <Accordion title="Love Live! - Snow Halation">
                    <a target="_blank" href="https://drive.google.com/file/d/1QNAamVPpQuoK1ww_9MIm-DdXqdhirLNE/view?usp=drive_link">Love Live! - Snow Halation.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="M" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Madan no Ou to Vanadis - Schwarzer Bogen">
                    <a target="_blank" href="https://drive.google.com/file/d/1Owz68v8bu6AZoR1sB8oihVIU_87TUyFa/view?usp=sharing">Madan no Ou to Vanadis - Schwarzer Bogen.pdf</a>
                  </Accordion>
                  <Accordion title="Mirai Nikki - Here With You">
                    <a target="_blank" href="https://drive.google.com/file/d/12cp0susewbvdUWSPSIlWpAeMTc_j9siC/view?usp=sharing">Mirai Nikki - Here With You.pdf</a>
                  </Accordion>
                  <Accordion title="Mysterious Girlfriend X - Dream Theme">
                    <a target="_blank" href="https://drive.google.com/file/d/1RMnD_CrgKH0F1I-1dDx71ffkgGUoUMky/view?usp=drive_link">Mysterious Girlfriend X - Dream Theme.pdf</a>
                  </Accordion>
                </NestedAccordion>
              </div>
              <div className="container-on-top">
                <NestedAccordion title="N" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Nier - Ashes of Dreams">
                    <a target="_blank" href="https://drive.google.com/file/d/1BscM3slAidOElOoeVjGHZVEh5S5oQSmy/view?usp=drive_link">Nier - Ashes of Dreams.pdf</a>
                  </Accordion>
                  <Accordion title="Nier - Voice of No Return">
                    <a target="_blank" href="https://drive.google.com/file/d/1yw7RKP6UFS_Julol4VCLBsUNm8CMzRAW/view?usp=drive_link">Nier - Voice of No Return.pdf</a>
                  </Accordion>
                  <Accordion title="Naruto - Morning">
                    <a target="_blank" href="https://drive.google.com/file/d/1i6OYbKN_ckjn3UD_OCSgnAPsOxvAYfak/view?usp=drive_link">Naruto - Morning.pdf</a>
                  </Accordion>
                  <Accordion title="Naruto - Orochimaru's Theme">
                    <a target="_blank" href="https://drive.google.com/file/d/1_kopqXgN2rpFX1J1XmArRD9ev502mQig/view?usp=drive_link">Naruto - Orochimaru's Theme.pdf</a>
                  </Accordion>
                  <Accordion title="Naruto - Sadness and Sorrow">
                    <a target="_blank" href="https://drive.google.com/file/d/1HZMdwD6oEhH0KKYz1CtdsXBDaij_lj9C/view?usp=drive_link">Naruto - Sadness and Sorrow.pdf</a>
                  </Accordion>
                  <Accordion title="Naruto Shippuden- Medley">
                    <a target="_blank" href="https://drive.google.com/file/d/1O0dIEGArgq8UTDWxSjMAJHSag0k7oK7h/view?usp=drive_link">Naruto Shippuden- Medley.pdf</a>
                  </Accordion>
                  <Accordion title="Nagi no Asukara - A Mother's Hand">
                    <a target="_blank" href="https://drive.google.com/file/d/18g4TtrP1gSXy-Q7Gh5orRmIQd5hVtJr5/view?usp=drive_link">Nagi no Asukara - A Mother's Hand.pdf</a>
                  </Accordion>
                  <Accordion title="Nausicaa of the Valley of the Wind - Main Theme">
                    <a target="_blank" href="https://drive.google.com/file/d/1xTLH3KoUzgMDj9tUAQW7i8ZhjSG-o8Cw/view?usp=drive_link">Nausicaa of the Valley of the Wind - Main Theme.pdf</a>
                  </Accordion>
                  <Accordion title="Nightmare Before Christmas - Sally's Theme">
                    <a target="_blank" href="https://drive.google.com/file/d/1PLL7vjOYGJcDwcLE6M4eh00l-YrF41mx/view?usp=drive_link">Nightmare Before Christmas - Sally's Theme.pdf</a>
                  </Accordion>
                  <Accordion title="Now and Then, Here and There - Here and There">
                    <a target="_blank" href="https://drive.google.com/file/d/1k5MX9EcA6KT2EFQO5s2xAd3mjzZ1iIgg/view?usp=sharing">Now and Then, Here and There - Here and There.pdf</a>
                  </Accordion>
                  <Accordion title="No Game No Life - This Game">
                    <a target="_blank" href="https://drive.google.com/file/d/1yZMBNAGQUyIqYO6lgynlJlzCxuu7g7er/view?usp=sharing">No Game No Life - This Game.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="O" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Ouran High School Host Club - Sakura Kiss">
                    <a target="_blank" href="https://drive.google.com/file/d/1DgC2-J-TIngiGZUIh_WHxR-bwr2ARFOI/view?usp=drive_link">Ouran High School Host Club - Sakura Kiss.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="P" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Pandora Hearts - Will">
                    <a target="_blank" href="https://drive.google.com/file/d/1qODuJrxCncJYqKru9DoYHJVSoatTmYQb/view?usp=sharing">Pandora Hearts - Will.pdf</a>
                  </Accordion>
                  <Accordion title="Piano - ..To You">
                    <a target="_blank" href="https://drive.google.com/file/d/10cSQTDOjlSz8tdd6IgvJCRJCx9yIjQR4/view?usp=sharing">Piano - ..To You.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="Q" isOpen={allOpen} setIsOpenAll={setAllOpen}></NestedAccordion>
                <NestedAccordion title="R" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Rick and Morty - Evil Morty Theme">
                    <a target="_blank" href="https://drive.google.com/file/d/1ZoVYiu4OwWWIO-RXrkmYeCGbDkxQlyHi/view?usp=sharing">Rick and Morty - For the Damaged Coda.pdf</a>
                  </Accordion>
                  <Accordion title="Ratatouille">
                    <a target="_blank" href="https://drive.google.com/file/d/1ho79SmUSA95AuBxKJKiRdxNazW3Rpvng/view?usp=sharing">Ratatouille Main Theme.pdf</a>
                  </Accordion>
                  <Accordion title="Rewrite - Love Letter">
                    <a target="_blank" href="https://drive.google.com/file/d/1NfEG9SZMUjHTBZKfeDhF_XtKtavGT1h2/view?usp=sharing">Rewrite - Love Letter.pdf</a>
                  </Accordion>
                  <Accordion title="Rurouni Kenshin - Quiet Life">
                    <a target="_blank" href="https://drive.google.com/file/d/1hOFz0XJR5XzhUicKp43gKH2aeKwOWB8a/view?usp=drive_link">Rurouni Kenshin - Quiet Life.pdf</a>
                  </Accordion>
                  <Accordion title="Rurouni Kenshin - The Will">
                    <a target="_blank" href="https://drive.google.com/file/d/1OxdhNGpojHSpWwgF3yqawQmBgB4ArXQY/view?usp=drive_link">Rurouni Kenshin - The Will.pdf</a>
                  </Accordion>
                  <Accordion title="RWBY - Red Like Roses">
                    <a target="_blank" href="https://drive.google.com/file/d/1nb7h0PafoBhnUxQvuyLUazfVlebI4eM0/view?usp=drive_link">RWBY - Red Like Roses.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="S" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Spirited Away - Always With Me">
                    <a target="_blank" href="https://drive.google.com/file/d/1fpuPEuAMMGLDoNf5pSffDXUV2e9Dn0K6/view?usp=sharing">Spirited Away - Always With Me.pdf</a>
                  </Accordion>
                  <Accordion title="Spice and Wolf - Tabi no Tochuu">
                    <a target="_blank" href="https://drive.google.com/file/d/1BJ3thhG08yd_eHTazME_jDUIyGTzDCfJ/view?usp=drive_link">Spice and Wolf - Tabi no Tochuu.pdf</a>
                  </Accordion>
                  <Accordion title="Sword Art Online - Crossing Field">
                    <a target="_blank" href="https://drive.google.com/file/d/1xcbaEiGI9xqgnH7CG_tolfbzjdnU1Nuh/view?usp=drive_link">Sword Art Online - Crossing Field.pdf</a><br></br>
                    <a target="_blank" href="https://drive.google.com/file/d/1260rR2LaMtTtu1Q5VafnVeiw9mFtYkAA/view?usp=drive_link">Sword Art Online - Crossing Field (ver2).pdf</a>
                  </Accordion>
                  <Accordion title="Sword Art Online - Innocence">
                    <a target="_blank" href="https://drive.google.com/file/d/1YpSQCD_JDrgO_6WUO5I8PFWiZLuzYZzr/view?usp=drive_link">Sword Art Online - Innocence.pdf</a>
                  </Accordion>
                  <Accordion title="Sword Art Online - Swordland">
                    <a target="_blank" href="https://drive.google.com/file/d/1_BaoDRZTIDU6ygPr2Z6B3YjxshF7Fk5j/view?usp=drive_link">Sword Art Online - Swordland.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="T" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Trinity Blood - Sadness">
                    <a target="_blank" href="https://drive.google.com/file/d/1Y8INLY_fWn62Gp1MbTn08hhsoMJF9Lv6/view?usp=drive_link">Trinity Blood - Sadness.pdf</a>
                  </Accordion>
                  <Accordion title="Trinity Blood - Tenderness">
                    <a target="_blank" href="https://drive.google.com/file/d/1kqOxx2tKatFa_bPRBEz6W36XBRqzdq8H/view?usp=drive_link">Trinity Blood - Tenderness.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="U" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Up - Main Theme">
                    <a target="_blank" href="https://drive.google.com/file/d/1ellhjZ4uF5d7fyP8JWEohdzKo343vbha/view?usp=sharing">Up - Main Theme.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="V" isOpen={allOpen} setIsOpenAll={setAllOpen}>
                  <Accordion title="Vampire Knight - Forbidden Act">
                    <a target="_blank" href="https://drive.google.com/file/d/1NmJQ1i6kvxNi4lAk6uLtr8P-iCGxXzdb/view?usp=drive_link">Vampire Knight - Forbidden Act.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="W" isOpen={allOpen} setIsOpenAll={setAllOpen}></NestedAccordion>
                <NestedAccordion title="Y" isOpen={allOpen} setIsOpenAll={setAllOpen}></NestedAccordion>
                <NestedAccordion title="Z" isOpen={allOpen} setIsOpenAll={setAllOpen}></NestedAccordion>
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
