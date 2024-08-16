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
  const url = "http://localhost:3000/Jazz/";
  const url1 = "http://localhost:3000/Animation/";
  const url2 = "http://localhost:3000/Film/";
  const url3 = "http://localhost:3000/Meme/";
  const url4 = "http://localhost:3000/Foreign/";
  const url5 = "http://localhost:3000/Classical/";
  const url6 = "http://localhost:3000/Jazz-tabs/";
  const url7 = "http://localhost:3000/Animation-tabs/";
  const url8 = "http://localhost:3000/Film-tabs/";
  const url9 = "http://localhost:3000/Folk/";
  const url10 = "http://localhost:3000/Animation-chords/";
  const url11 = "http://localhost:3000/ForeignFolk/";
  const url12 = "http://localhost:3000/Oldies/";

  if (id === 'Jazz') {
    window.location.href = url;
  }
  if (id === 'Animation') {
    window.location.href = url1;
  }
  if (id === 'Film') {
    window.location.href = url2;
  }
  if (id === 'Meme') {
    window.location.href = url3;
  }
  if (id === 'Foreign') {
    window.location.href = url4;
  }
  if (id === 'Classical') {
    window.location.href = url5;
  }


  if (id === 'Jazz-tabs') {
    window.location.href = url6;
  }
  if (id === 'Animation-tabs') {
    window.location.href = url7;
  }
  if (id === 'Film-tabs') {
    window.location.href = url8;
  }
  if (id === 'Folk') {
    window.location.href = url9;
  }


  if (id === 'Animation-chords') {
    window.location.href = url10;
  }
  if (id === 'ForeignFolk') {
    window.location.href = url11;
  }
  if (id === 'Oldies') {
    window.location.href = url12;
  }
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
              <h3 id="sub">Foreign</h3>
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
                <NestedAccordion title="American" isOpen={allOpen}>
                  <Accordion title="Behind Blue Eyes">
                    <a target="_blank" href="https://drive.google.com/file/d/1ABzCYVctSWAy9ldxSc7UOoWoD0p_9Hhy/view?usp=sharing">Behind Blue Eyes - Limp Bizkit.pdf</a>
                  </Accordion>
                  <Accordion title="Boulevard of Broken Dreams">
                    <a target="_blank" href="https://drive.google.com/file/d/1G2IWLvcfQnRRgEiy1zrvz7gTEt5wXTDq/view?usp=sharing">Boulevard of Broken Dreams - Green Day.pdf</a>
                  </Accordion>
                  <Accordion title="Can't Help Falling In Love">
                    <a target="_blank" href="https://drive.google.com/file/d/1C-BGUpCv0JWV7klXbS0qNrUDX4-MoFSN/view?usp=sharing">Can't Help Falling In Love - Elvis Presley.pdf</a>
                  </Accordion>
                  <Accordion title="Live and Let Die">
                    <a target="_blank" href="https://drive.google.com/file/d/1e5GveklJQT2qprPERrxzsyvoD-OqbiCX/view?usp=drive_link">Live and Let Die - The Wings.pdf</a>
                  </Accordion>
                  <Accordion title="Mr.Lonely">
                    <a target="_blank" href="https://drive.google.com/file/d/1kjB3Gu_NsJafiwedPlvNi7Fe2lUqIuu4/view?usp=sharing">Mr.Lonely - Bobby Vinton.pdf</a>
                  </Accordion>
                  <Accordion title="Memory(Cats)">
                    <a target="_blank" href="https://drive.google.com/file/d/1vrJUWVyfnuzTQQ6WWK3eW87o9cb5_-wO/view?usp=sharing">Memory - Andrew Lloyd Webber.pdf</a>
                  </Accordion>
                  <Accordion title="New York, New York">
                    <a target="_blank" href="https://drive.google.com/file/d/1AwCNhG9qlDU0HV77iG0UukVMP6pt6fuk/view?usp=sharing">New York, New York - Frank Sinatra.pdf</a>
                  </Accordion>
                  <Accordion title="Sleepwalk">
                    <a target="_blank" href="https://drive.google.com/file/d/1APK05_NtsqVJlKb1k13A9Rp7_ICjqNV8/view?usp=sharing">Sleepwalk - Santo and Johnny.pdf</a>
                  </Accordion>
                  <Accordion title="Smoke Gets in Your Eyes">
                    <a target="_blank" href="https://drive.google.com/file/d/15djBa7ssNIeeHDteinP4b9wVAtdX37UA/view?usp=sharing">Smoke Gets in Your Eyes - The Platters.pdf</a>
                  </Accordion>
                  <Accordion title="Sometimes When It Rains">
                    <a target="_blank" href="https://drive.google.com/file/d/1yqTSQkvEaPZ24-HdPTicOqY_1Vd28MCz/view?usp=sharing">Sometimes When It Rains - Secret Garden.pdf</a>
                  </Accordion>
                  <Accordion title="Summer's Dream">
                    <a target="_blank" href="https://drive.google.com/file/d/1HZB4wqcbZWggIepZ3p55Ptlkpnv4Muy1/view?usp=sharing">Summer's Dream - Catherine Rollin.pdf</a>
                  </Accordion>
                  <Accordion title="Tennessee Waltz">
                    <a target="_blank" href="https://drive.google.com/file/d/18h7J4-u59LS7XM2SFxqNotPRNs64OrJo/view?usp=sharing">Tennessee Waltz - Redd Stewart.pdf</a>
                  </Accordion>
                  <Accordion title="Those Were the Days">
                    <a target="_blank" href="https://drive.google.com/file/d/1YP4QLpBWrymdGOEKPgKVm8oCllz41c4l/view?usp=sharing">Those Were the Days - Boris Formin.pdf</a>
                  </Accordion>
                  <Accordion title="You Don't Have to Say You Love Me">
                    <a target="_blank" href="https://drive.google.com/file/d/1v8K82YSMIr9a0n6zEZOa0eQxKPnWAfDP/view?usp=sharing">You Don't Have to Say You Love Me.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="French" isOpen={allOpen}>
                  <Accordion title="Comptine d'un autre été">
                    <a target="_blank" href="https://drive.google.com/file/d/1YikBiimTQVsLmAtkV082f33yZco7fUDm/view?usp=sharing">Comptine d'un autre été - Yann Tiersen.pdf</a>
                  </Accordion>
                  <Accordion title="Jours en France">
                    <a target="_blank" href="https://drive.google.com/file/d/1xZC-nLaqjxz8tVLXMXXe3TLF9x4PDaim/view?usp=drive_link">Jours en France - Francis Lai.pdf</a>
                  </Accordion>
                  <Accordion title="La Valse D'Amelie">
                    <a target="_blank" href="https://drive.google.com/file/d/1OYHELFyatekVEaP-Zz6rV-hNvZ3mXDFp/view?usp=sharing">La Valse D'Amelie - Yann Tiersen.pdf</a>
                  </Accordion>
                  <Accordion title="Les Rois du Monde">
                    <a target="_blank" href="https://drive.google.com/file/d/1CrErwrMklEFy4rDhugilH-DtdHfEoQ_S/view?usp=sharing">Les Rois du Monde - Gérard Presgurvic.pdf</a>
                  </Accordion>
                  <Accordion title="Marriage D'Amour">
                    <a target="_blank" href="https://drive.google.com/file/d/1zRNlhLVR03gBNZGOTHHzG674y8LOY9s5/view?usp=drive_link">Marriage D'Amour - Richard Clayderman.pdf</a>
                  </Accordion>
                  <Accordion title="Notre Dame de Paris">
                    <a target="_blank" href="https://drive.google.com/file/d/1UbL42JljZkV6TjtARSQlGSr78jRniG74/view?usp=sharing">Notre Dame de Paris.pdf</a>
                  </Accordion>
                  <Accordion title="Pardonne Moi">
                    <a target="_blank" href="https://drive.google.com/file/d/1PHhFwI41IY4SGmYdSNjjHVcIbrbKwloV/view?usp=sharing">Pardonne Moi - Paul Mauriat.pdf</a>
                  </Accordion>
                  <Accordion title="Tombe La Neige">
                    <a target="_blank" href="https://drive.google.com/file/d/16GLKGZa-gXAA6uxWwKjofePteRnr0fn3/view?usp=drive_link">Tombe La Neige - Salvator Adamo.pdf</a>
                  </Accordion>
                  <Accordion title="Umbrella's of Cherbourg">
                    <a target="_blank" href="https://drive.google.com/file/d/11Sufi87u9vSVPjd0l1_SyEnLmZi44Sb0/view?usp=sharing">Umbrella's of Cherbourg - Legran.pdf</a>
                  </Accordion>
                  <Accordion title="Une Vie D'amour - Mireille Mathieu">
                    <a target="_blank" href="https://drive.google.com/file/d/1s5QzJSj-LeZic5fDVkAwbrtdp-jwOPkd/view?usp=sharing">Une Vie D'amour - Mireille Mathieu.pdf</a>
                  </Accordion>

                </NestedAccordion>
                <NestedAccordion title="Italian" isOpen={allOpen}>
                  <Accordion title="Caruso">
                    <a target="_blank" href="https://drive.google.com/file/d/1eWa_Fjl849bAMfa0qBkecySwxL9ObJCW/view?usp=drive_link">Caruso - Lucio Dalla.pdf</a>
                  </Accordion>
                  <Accordion title="Chi Mai">
                    <a target="_blank" href="https://drive.google.com/file/d/1eWa_Fjl849bAMfa0qBkecySwxL9ObJCW/view?usp=drive_link">Chi Mai - Ennio Morricone.pdf</a>
                  </Accordion>
                  <Accordion title="Guarde de Che Luna">
                    <a target="_blank" href="https://drive.google.com/file/d/1h7IyJF9rN09bFVMrEhQJDL8EHbGAsZBV/view?usp=drive_link">Guarde de Che Luna - Fred Buscaglione.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="Korean" isOpen={allOpen}>
                  <Accordion title="Amazing Love - 'Full House'">
                    <a target="_blank" href="https://drive.google.com/file/d/1zVPPkkzbzuqwoud9ljRq-xdVN76iBX_m/view?usp=drive_link">Amazing Love - 'Full House'.pdf</a>
                  </Accordion>
                  <Accordion title="Destiny - 'Full House'">
                    <a target="_blank" href="https://drive.google.com/file/d/1avo_0UYgBtu3xRcTqxsP1hUtJkbHrlVZ/view?usp=drive_link">Destiny - 'Full House'.pdf</a>
                  </Accordion>
                  <Accordion title="Dream - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/18VqdTW5F85IgqKU0--IncMNAfXXh7__w/view?usp=drive_link">Dream - Yiruma.pdf</a>
                  </Accordion>
                  <Accordion title="Epilogue - 이병우">
                    <a target="_blank" href="https://drive.google.com/file/d/1AJwdxUhGGna_Xi8rM0U5wy8oBzg1i1C0/view?usp=sharing">Epilogue - 이병우.pdf</a>
                  </Accordion>
                  <Accordion title="Gabriel - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/1IpFcgjSvJTxdAKTPG68j7bIQtn2MYkdt/view?usp=drive_link">Gabriel - Yiruma.pdf</a>
                  </Accordion>
                  <Accordion title="I - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/1y5tdbFRCNxS5WOFvlT1nzECT_utKGPFx/view?usp=drive_link">I - Yiruma.pdf</a>
                  </Accordion>
                  <Accordion title="If - Taeyeon">
                    <a target="_blank" href="https://drive.google.com/file/d/17g4isetmBc-IVHcK8f6GJKLVowM-Rk8v/view?usp=drive_link">If - Taeyeon.pdf</a>
                  </Accordion>
                  <Accordion title="Kiss the Rain - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/111mfU5RHn-iiWpS0v2fkZRDdmiJbUxMv/view?usp=drive_link">Kiss the Rain - Yiruma.pdf</a>
                  </Accordion>
                  <Accordion title="Letter - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/19KJOUuejMTB5ii72JDpE0IlKmSs17hna/view?usp=drive_link">Letter - Yiruma.pdf</a>
                  </Accordion>
                  <Accordion title="Maybe - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/15I9cgIKZ1b958zx2UYKMzI4_G7EDVw71/view?usp=drive_link">Maybe - Yiruma.pdf</a>
                  </Accordion>
                  <Accordion title="Memories in My Eyes - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/18LmKaJI2AZgi8VfryzFR_uf3IiH2HXJh/view?usp=sharing">Memories in My Eyes - Yiruma.pdf</a>
                  </Accordion>
                  <Accordion title="My Memory - Ryu">
                    <a target="_blank" href="https://drive.google.com/file/d/1A49pxIxVZVSCXymgpZc18VcWi-3KvS_o/view?usp=drive_link">My Memory - Ryu.pdf</a>
                  </Accordion>
                  <Accordion title="Tears on Love - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/1ZLm3FKOCxU_-tS8kHr9dAo0QZPqB-08S/view?usp=drive_link">Tears on Love - Yiruma.pdf</a>
                  </Accordion>
                  <Accordion title="Teardrop Waltz - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/1vVNk89CVBnwMrmpu1AHKu6KNKcePdr80/view?usp=drive_link">Teardrop Waltz - Yiruma.pdf</a>
                  </Accordion>
                  <Accordion title="The Day After - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/1HCFh2bnKpBX75XQwngqMU4fRuvZHuILU/view?usp=drive_link">The Day After - Yiruma.pdf</a>
                  </Accordion>
                  <Accordion title="Wait There - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/1fEc4XAsILyfqwCzWfLcBollcvgwhQlT1/view?usp=drive_link">Wait There - Yiruma.pdf</a>
                  </Accordion>
                  <Accordion title="What Beautiful Stars - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/1XCNVfDWYXAcP98ha8lYEuIsTYUK2ir78/view?usp=drive_link">What Beautiful Stars - Yiruma.pdf</a>
                  </Accordion>
                  <Accordion title="When the Love Falls - Yiruma">
                    <a target="_blank" href="https://drive.google.com/file/d/1X41NL3RmzA511BmDSTGu4LPDyjIDWRU2/view?usp=drive_link">When the Love Falls - Yiruma.pdf</a>
                  </Accordion>
                </NestedAccordion>
              </div>
              <div className="container-on-top">
                <NestedAccordion title="Japanese" isOpen={allOpen}>
                  <Accordion title="Friends">
                    <a target="_blank" href="https://drive.google.com/file/d/1Tcv91tffcq2jRhiu3PgEnJvBGGQEymse/view?usp=drive_link">Friends - Joe Hisaishi.pdf</a>
                  </Accordion>
                  <Accordion title="Impossible Dream">
                    <a target="_blank" href="https://drive.google.com/file/d/1xltAhQJ6V41xyiaEIUO9NZgZWHj43u07/view?usp=sharing">Impossible Dream - Joe Hisaishi.pdf</a>
                  </Accordion>
                  <Accordion title="Resphoina">
                    <a target="_blank" href="https://drive.google.com/file/d/1NaTkmzOpqZtVOb8T45L7NmZaMFwUwwUe/view?usp=sharing">Resphoina - Joe Hisaishi.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="Russian" isOpen={allOpen}>
                  <Accordion title="А Любовь Жива">
                    <a target="_blank" href="https://drive.google.com/file/d/1zWJ_98UAtzEhZY2KSVssfNYQDVNb_F6r/view?usp=sharing">А Любовь Жива - Бабаджанян.pdf</a>
                  </Accordion>
                  <Accordion title="Ветер Перемен">
                    <a target="_blank" href="https://drive.google.com/file/d/1LNwANunaQtalm5GC9hQNWnALNWPNUHkA/view?usp=sharing">Ветер Перемен.pdf</a>
                  </Accordion>
                  <Accordion title="Вальс (Семнадцать Мгновений Весны)">
                    <a target="_blank" href="https://drive.google.com/file/d/187u1iTH_h8hh_RHoPUU2H9Msm3tfcgLy/view?usp=sharing">Вальс - Таривердиев.pdf</a>
                  </Accordion>
                  <Accordion title="Вальс (Берегись Автомобиль)">
                    <a target="_blank" href="https://drive.google.com/file/d/1C2VE0kmuZMLi4yrriu-YVOgjZu7xy5b6/view?usp=sharing">Вальс - Петров.pdf</a>
                  </Accordion>
                  <Accordion title="Свой Среди Чужих, Чужой Среди Своих">
                    <a target="_blank" href="https://drive.google.com/file/d/1jd2pzX3i06W3dNkj3G_lzaE-hHUczQsz/view?usp=sharing">Свой Среди Чужих, Чужой Среди Своих.pdf</a>
                  </Accordion>
                  <Accordion title="Снег над Ленинградом">
                    <a target="_blank" href="https://drive.google.com/file/d/1ZaGrvVETogkhjYT5ZzqCT8xBIsK8KAA-/view?usp=sharing">Снег над Ленинградом - Таривердиев.pdf</a>
                  </Accordion>
                  <Accordion title="Кабы Небыло Зимы">
                    <a target="_blank" href="https://drive.google.com/file/d/1iFQn01vQwQqCzxmgDabkilhFs5bcXRQH/view?usp=drive_link">Кабы Небыло Зимы.pdf</a>
                  </Accordion>
                  <Accordion title="Калинка">
                    <a target="_blank" href="https://drive.google.com/file/d/1z9lsU9WGwwtKMyEuNLgjH-3t-Hpyb2PW/view?usp=sharing">Калинка.pdf</a>
                  </Accordion>
                  <Accordion title="Ланфрен-Ланфра">
                    <a target="_blank" href="https://drive.google.com/file/d/1aTeIDnK7fiQsEWwFUdgfWjaz7AhWXGYz/view?usp=sharing">Ланфрен-Ланфра.pdf</a>
                  </Accordion>
                  <Accordion title="Двенадцать Стульев Альбом">
                    <a target="_blank" href="https://drive.google.com/file/d/1nxvipavQyW6ak778ARbhiBK_GuYXZbjY/view?usp=sharing">Двенадцать Стульев Альбом.pdf</a>
                  </Accordion>
                  <Accordion title="Летний Дождь">
                    <a target="_blank" href="https://drive.google.com/file/d/1vmwajxTiNu2WSGSMQ5rscKInxNz7hug9/view?usp=sharing">Летний Дождь - Тальков.pdf</a>
                  </Accordion>
                  <Accordion title="Дым Сигарет С Ментолом">
                    <a target="_blank" href="https://drive.google.com/file/d/19uVnl-NZsdvAon_diJV9jkSecgqBiUgx/view?usp=sharing">Дым сигарет с ментолом - Нэнси.pdf</a>
                  </Accordion>
                  <Accordion title="Долгая Дорога в Дюнах">
                    <a target="_blank" href="https://drive.google.com/file/d/1u6BXD7d2QUOlVfAPbbbFlBUQ1qbB06kK/view?usp=sharing">Долгая Дорога в Дюнах.pdf</a>
                  </Accordion>
                  <Accordion title="Незаконченный Роман">
                    <a target="_blank" href="https://drive.google.com/file/d/18XGtrG97jJ6a4beD2yXcneQrXmpeQyKQ/view?usp=sharing">Незаконченный Роман.pdf</a>
                  </Accordion>
                  <Accordion title="Не Уходи, Побудь со Мной">
                    <a target="_blank" href="https://drive.google.com/file/d/1-zc2yu6rVhXSs4o_qZQB5lul_ipAl58s/view?usp=sharing">Не Уходи, Побудь со Мной.pdf</a>
                  </Accordion>
                  <Accordion title="Нежность">
                    <a target="_blank" href="https://drive.google.com/file/d/1rlhNseOVwcZZDAQBFCk6H_GCnFknE897/view?usp=sharing">Нежность.pdf</a>
                  </Accordion>
                  <Accordion title="Не Исчезай">
                    <a target="_blank" href="https://drive.google.com/file/d/11sXJZC-cVtSnGvJnNqJv8dwqWHhsO8FB/view?usp=sharing">Не Исчезай.pdf</a>
                  </Accordion>
                  <Accordion title="Ностальгия">
                    <a target="_blank" href="https://drive.google.com/file/d/1VzptSFdMZg3IGu4bvxSbGIQsE-jkdKqP/view?usp=sharing">Ностальгия - Азарашвили.pdf</a>
                  </Accordion>
                  <Accordion title="Очи Черные">
                    <a target="_blank" href="https://drive.google.com/file/d/1eGeuriDfmzb4vxwVgQV647KvW9jvDi9m/view?usp=sharing">Очи Черные.pdf</a>
                  </Accordion>
                  <Accordion title="Песня Про Зайцев">
                    <a target="_blank" href="https://drive.google.com/file/d/1vU-HqI3eX05b2r6xc9T2r9qqmAGUvRkP/view?usp=sharing">Песня Про Зайцев.pdf</a>
                  </Accordion>
                  <Accordion title="Потому Что Нельзя">
                    <a target="_blank" href="https://drive.google.com/file/d/1cn7_BzJhQS9T7vpxDlQRPKQXcIQ9oRQY/view?usp=sharing">Потому Что Нельзя.pdf</a>
                  </Accordion>
                  <Accordion title="Тот Самый Мюнхаузен">
                    <a target="_blank" href="https://drive.google.com/file/d/1Q2dJHZtyH_mYOv7mNMjXq76kI_C6Sx2B/view?usp=sharing">Тот Самый Мюнхаузен - Рыбников.pdf</a>
                  </Accordion>
                  <Accordion title="Ты в Моем Сентебре">
                    <a target="_blank" href="https://drive.google.com/file/d/1q0_BUMRDyiND6W5nZv1bwuGuu2F3emMY/view?usp=sharing">Ты в Моем Сентебре - Крутой.pdf</a>
                  </Accordion>
                  <Accordion title="Эх, Дороги">
                    <a target="_blank" href="https://drive.google.com/file/d/1hxCQcih4YiYwE3V1_7hEc3UjMsAkZLih/view?usp=sharing">Эх, Дороги.pdf</a>
                  </Accordion>
                  <Accordion title="Я Xочу Быть С Тобой">
                    <a target="_blank" href="https://drive.google.com/file/d/1p2VGqIY3BiG8-TD9QPyHTndvT6oCyJeT/view?usp=sharing">Я хочу быть с тобой - Наутилус Помпилиус.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="Spanish" isOpen={allOpen}>
                  <Accordion title="Abrazame">
                    <a target="_blank" href="https://drive.google.com/file/d/1W3sTRPLEEQ1tPuu_uG8YNL6t3yAJrtEP/view?usp=drive_link">Abrazame - Julio Iglesias.pdf</a>
                  </Accordion>
                  <Accordion title="Por Una Cabeza">
                    <a target="_blank" href="https://drive.google.com/file/d/1Do8lS_KIpwHL9hZ2PpHdIiNTT2WBCquj/view?usp=sharing">Por Una Cabeza - Carlos Gardel.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="Chinese" isOpen={allOpen}>
                  <Accordion title="安静 (Silence)">
                    <a target="_blank" href="https://drive.google.com/file/d/1NXgStl85gCIFKHyMLI9OCN8er_pX6x12/view?usp=drive_link">安静 - Jay Chou.pdf</a>
                  </Accordion>
                  <Accordion title="那些年 (Those Years)">
                    <a target="_blank" href="https://drive.google.com/file/d/1NXgStl85gCIFKHyMLI9OCN8er_pX6x12/view?usp=drive_link">那些年 - Hu Xia.pdf</a>
                  </Accordion>
                  <Accordion title="童話 (Fairy Tale)">
                    <a target="_blank" href="https://drive.google.com/file/d/1NXgStl85gCIFKHyMLI9OCN8er_pX6x12/view?usp=drive_link">童話 - Michael Wong.pdf</a>
                  </Accordion>
                </NestedAccordion>
                <NestedAccordion title="Miscellaneous" isOpen={allOpen}>
                  <Accordion title="Collection of Arias - Lukinih" >
                    <a target="_blank" href="https://drive.google.com/file/d/17yKjVCL5W5uJ4_zMKT5ZUPSgvVRGXQDH/view?usp=sharing">Collection of Arias - Lukinih.pdf</a>
                  </Accordion>
                </NestedAccordion>
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
