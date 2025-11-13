// import logo from './logo.svg';
import './App.css';

import BasicExample from './Components/Navbar';
import Certificates from './Components/Certificates';
import Footer from './Components/Footer';
import { Service } from './Components/Service';
import Skills from './Components/Skills';
import MirroredBackground from './Components/Bg';


function App() {
  return (
    <>
      <BasicExample />
      <div id="home"><MirroredBackground /></div>
      <div id="skills"><Skills /></div>
      <div id="certificates"><Certificates /></div>
      <div id="projects"><Service /></div>
      <Footer />
    </>
  );
}

export default App;
