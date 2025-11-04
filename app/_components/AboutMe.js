import AboutMeText from "./AboutMeText";

function AboutMe() {
  return (
    <section id="about-me" className="overflow-x-hidden">
      <div className="container mx-auto px-4 py-20">
        <h2 className="content-head">About Me</h2>
        <AboutMeText />
      </div>
    </section>
  );
}

export default AboutMe;
