import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

function Landing() {
  return (
    <section className="hero relative overflow-hidden" id="home">
      <div className="container mx-auto mt-[100px] flex min-h-[calc(100vh-100px)] flex-col justify-between px-4 lg:flex-row">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}

export default Landing;
