import Inicio from "./Inicio";
import ParaTi from "./ParaTi";
import Testimonios from "./Testimonios";
import ComoFunciona from "./ComoFunciona";
import CTA from "./CTA";
import Footer from "./Footer";
import NavBar from "./Navbar";
import AppShowcase from "./AppShowcase";
import MeetTheTeam from "./MeetTheTeam";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="w-full pt-[60px] md:pt-[80px]">
        <Inicio />
        <ParaTi />
        <Testimonios />
        <AppShowcase />
        <MeetTheTeam />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
