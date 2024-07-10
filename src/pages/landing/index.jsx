
import About from "./components/about";
import Collection from "./components/collection";
import Hero from "./components/hero";
import Services from "./components/services";
import Statististics from "./components/statististics";
import Testimonials from "./components/testimonials";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Collection />
      <Statististics />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
