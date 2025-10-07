import Inicio from "./Inicio";
import ParaTi from "./ParaTi";
import Testimonios from "./Testimonios";
import ComoFunciona from "./ComoFunciona";
import CTA from "./CTA";
import Footer from "./Footer";
import NavBar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="w-full pt-[60px] md:pt-[80px]">
        <Inicio />
        <ParaTi />
        <Testimonios />
        <ComoFunciona />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
