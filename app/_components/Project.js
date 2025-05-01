import Image from "next/image";
import { Fragment } from "react";

const toolsColor = {
  "React.js": "text-cyan-400 text-shadow-cyan-400",
  Mongodb: "text-green-400 text-shadow-green-400",
  "Next.js": "text-gray-400 text-shadow-gray-400",
  "Node.js": "text-lime-400 text-shadow-lime-400",
  "Express.js": "text-white text-shadow-white",
};

function Project({ title, description, imgPath, tools, importantTools }) {
  return (
    <article className="my-8 block rounded-md shadow-md">
      <a
        href="https://youtube.com"
        rel="noreferral noopener"
        className="block focus:rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        aria-label={`View ${title} project details`}
      >
        <figure className="relative h-50">
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
    </article>
  );
}

export default Project;
