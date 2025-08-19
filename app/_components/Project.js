import Image from "next/image";
import { Fragment, useEffect, useLayoutEffect, useRef } from "react";
import { FiGithub } from "react-icons/fi";

const toolsColor = {
  "React.js": "text-cyan-400 text-shadow-cyan-400",
  Mongodb: "text-green-400 text-shadow-green-400",
  "Next.js": "text-gray-400 text-shadow-gray-400",
  "Node.js": "text-lime-400 text-shadow-lime-400",
  "Express.js": "text-white text-shadow-white",
};

function Project({
  title,
  description,
  imgPath,
  tools,
  importantTools,
  projectUrl,
  githubRepo,
}) {
  const ref = useRef();
  useEffect(() => {
    const target = ref.current;
    const targetWidth = target.offsetWidth;
    const targetHeight = target.offsetHeight;

    target.style.clipPath = `path("M 10,50 L 40,50 A 10,10 0,0,0 50,40 L 50,10 A 10,10 0,0,1 60,0 L ${targetWidth},0 L ${targetWidth},${targetHeight} L 0,${targetHeight}, 0,60 A 10,10 0,0,1 10,50 Z")`;
    // target.style.transform = `rotate(180deg)`;
  }, []);

  return (
    <div className="relative my-8 block overflow-hidden rounded-md shadow-md">
      <a
        href={githubRepo || "https://github.com"}
        className="absolute top-0 left-0 grid h-[45px] w-[45px] place-content-center rounded-[10px] border-3 border-gray-300 p-2 duration-400 hover:border-white"
      >
        <FiGithub
          className="text-[30px] text-gray-300 hover:text-white"
          // width={40}
          // height={40}
        />
      </a>
      <a
        href={projectUrl || "/"}
        rel="noreferral noopener"
        className="block focus:rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        aria-label={`View ${title} project details`}
      >
        <figure className="relative h-50 overflow-hidden" ref={ref}>
          {imgPath ? (
            <Image
              src={imgPath}
              fill
              className="object-cover object-center"
              alt={`Screenshot of ${title} website project`}
              role="img"
            />
          ) : (
            <div
              className="h-50 rounded-tl-md rounded-tr-md bg-black"
              aria-hidden="true"
            />
          )}
        </figure>

        <div className="p-3">
          <div
            className={`mb-1 w-fit rounded-full bg-gray-700/20 px-4 py-2 text-xs`}
            role="list"
            aria-label="Technologies used"
          >
            <span className="sr-only">Tools used: </span>
            {tools ? tools : "Tools"}:
            {importantTools &&
              importantTools.map((lang, i, obj) => (
                <Fragment key={lang}>
                  <span
                    className={`${toolsColor[lang]} text-bold`}
                    role="listitem"
                  >
                    {lang}
                  </span>
                  {i !== obj.length - 1 && ", "}
                </Fragment>
              ))}
          </div>
          <h3 className="text-lg font-semibold text-white">
            {title ? title : "Title"}
          </h3>
          <p className="text-sm text-gray-400">
            {description ? description : "Description"}
          </p>
        </div>
      </a>
    </div>
  );
}

export default Project;
