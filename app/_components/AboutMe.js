import AboutMePart1 from "./AboutMePart1";
import AboutMePart2 from "./AboutMePart2";

function AboutMe() {
  return (
    <section id="about-me">
      <div className="container mx-auto px-4 py-20">
        <h2 className="content-head">About Me</h2>
        <AboutMePart1 />
        <AboutMePart2 />
      </div>
    </section>
  );
}

export default AboutMe;
