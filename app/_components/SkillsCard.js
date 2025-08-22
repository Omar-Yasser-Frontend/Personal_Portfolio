import SkillCard from "./SkillCard";

const skillsList = [
  {
    imgPath: "/html.png",
    title: "HTML",
    level: "Advanced",
    description:
      "Strong knowledge of semantic HTML and accessibility best practices.",
  },
  {
    imgPath: "/css.png",
    title: "CSS",
    level: "Advanced",
    description:
      "Experienced with Flexbox, Grid, Responsive Design, and modern layouts.",
  },
  {
    imgPath: "/js.png",
    title: "JavaScript",
    level: "Advanced",
    description:
      "Comfortable with ES6+, DOM manipulation, asynchronous JS (Promises, async/await).",
  },
  {
    imgPath: "/react.png",
    title: "React.JS",
    level: "Advanced",
    description:
      "Building dynamic interfaces using hooks, context API, component-driven architecture and fimilar with a lot of react eco-system like redux, react query, react router etc...",
  },
  {
    imgPath: "/nextjs.png",
    title: "Next.JS",
    level: "Advanced",
    description:
      "Building SSR and SSG applications, routing, basic API routes.",
  },
  {
    imgPath: "/tailwindcss.png",
    title: "Tailwind CSS",
    level: "Advanced",
    description:
      "Rapidly building modern, responsive UIs with utility-first CSS.",
  },
  {
    imgPath: "/nodejs.png",
    title: "Node.JS",
    level: "Advanced",
    description:
      "Building simple backend services, REST APIs, and middleware handling.",
  },
  {
    imgPath: "/express.png",
    title: "Express.JS",
    level: "Advanced",
    description:
      "Creating REST APIs, middleware, and handling routing and errors.",
  },
  {
    imgPath: "/mongodb.png",
    title: "MongoDB",
    level: "Advanced",
    description:
      "Working with schemas, models, basic queries, and Mongoose integration.",
  },
];

function SkillsCard() {
  return (
    <ul className="mt-[100px] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
      {skillsList.map((skill) => (
        <SkillCard skill={skill} key={skill.title} />
      ))}
    </ul>
  );
}

export default SkillsCard;
