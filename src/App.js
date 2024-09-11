import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Connect } from './components/Connect';
import { Journey } from './components/Journey';

// TODO: Colours, Journey css, Achievements/awards sections + languages, fill Projects + hobbies, fill Skills, expand NavBar, accordion ABout section in Banner


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Journey />
      <Connect />
      <Footer />
    </div>
  );
}
// yeet
export default App;
