import About from "./about";
import "./App.css";
import Available from "./available";
import Contact from "./contact";
import Cta from "./cta";
import Faq from "./faq";
import Feature from "./features";
import Fotter from "./footer";
import Hero from "./hero";
import Navber from "./Navbar";
import TeamMember from "./team";


function App() {
  return (
    <>
      <Navber/>
      <Hero/>
      <Feature/>
      <Available/>
      <About/>
      <Cta/>
      <Faq/>
      <TeamMember/>
      <Contact/>
      <Fotter/>
    </>
  );
}

export default App;
