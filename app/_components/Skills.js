import ParticlesBG from "./ParticlesBG";
import SkillsCard from "./SkillsCard";

function Skills() {
  return (
    <section className="relative overflow-hidden" id="skills">
      <ParticlesBG className={"absolute inset-0 -z-50"} />
      <div className="container mx-auto px-4 py-20">
        <h2 className="content-head mb-20">Skills</h2>

        <SkillsCard />
      </div>
    </section>
  );
}

export default Skills;
