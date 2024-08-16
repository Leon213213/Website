import Home from "./components/Home";
import About from "./components/About";
import Donate from "./components/Donate";
import Inquiries from "./components/Inquiries";
import {Routes, Route} from "react-router-dom";
import Jazz from "./components/Sheet_music/Jazz";
import Animation from "./components/Sheet_music/Animation";
import Film from "./components/Sheet_music/Film";
import Foreign from "./components/Sheet_music/Foreign";
import Folk from "./components/Sheet_music/Folk";
import Classical from "./components/Sheet_music/Classical";
import Jazz_tabs from "./components/Sheet_music/Jazz_tabs";
import Animation_tabs from "./components/Sheet_music/Animation_tabs";
import Film_tabs from "./components/Sheet_music/Film_tabs";
import Animation_chords from "./components/Sheet_music/Animation_chords";
import ForeignFolk from "./components/Sheet_music/ForeignFolk";
import Oldies from "./components/Sheet_music/Oldies";


function App() {
  return <div className="App">
    <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/About" element={<About/>} />
   <Route path="/Inquiries" element={<Inquiries/>} />
   <Route path="/Donate" element={<Donate/>} />
   <Route path="/Jazz" element={<Jazz/>} />
   <Route path="/Animation" element={<Animation/>} />
   <Route path="/Film" element={<Film/>} />
   <Route path="/Foreign" element={<Foreign/>} />
   <Route path="/Classical" element={<Classical/>} />
   <Route path="/Jazz_tabs" element={<Jazz_tabs/>} />
   <Route path="/Animation_tabs" element={<Animation_tabs/>} />
   <Route path="/Film_tabs" element={<Film_tabs/>} />
   <Route path="/Folk" element={<Folk/>} />
   <Route path="/Animation_chords" element={<Animation_chords/>} />
   <Route path="/ForeignFolk" element={<ForeignFolk/>} />
   <Route path="/Oldies" element={<Oldies/>} />
   
    </Routes>
  </div>
}
export default App;
