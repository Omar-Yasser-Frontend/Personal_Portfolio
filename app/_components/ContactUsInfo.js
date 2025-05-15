import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function ContactUsInfo() {
  return (
    <div className="space-y-6">
      <a
        href="mailto:craft14716@gmail.com"
        className="bg-secondary/10 hover:bg-secondary/20 flex items-center gap-4 rounded-lg p-2 transition-colors sm:p-4"
      >
        <div className="bg-secondary/20 flex h-12 w-12 items-center justify-center rounded-full">
          <FaEnvelope className="text-secondary text-xl" />
        </div>
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-400">craft14716@gmail.com</p>
        </div>
      </a>

      <a
        href="https://wa.me/201064142795?text=Hello%20Omar%2C%20I%20want%20to%20contact%20you%20for%20a%20project"
        className="bg-secondary/10 hover:bg-secondary/20 flex items-center gap-4 rounded-lg p-2 transition-colors sm:p-4"
      >
        <div className="bg-secondary/20 flex h-12 w-12 items-center justify-center rounded-full">
          <FaPhone className="text-secondary text-xl" />
        </div>
        <div>
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-400">+20 1064142795</p>
        </div>
      </a>

      <div className="flex gap-4 pt-4">
        <a
          aria-label="my LinkedIn account"
          href="https://www.linkedin.com/in/omar-yasser-2440aa262/"
          rel="noreferral noopener"
          className="bg-secondary/20 hover:bg-secondary/30 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
        >
          <FaLinkedin className="text-secondary" />
        </a>
        <a
          aria-label="my twitter account"
          href="https://github.com/Omar-Yasser-Frontend"
          rel="noreferral noopener"
          className="bg-secondary/20 hover:bg-secondary/30 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
        >
          <FaGithub className="text-secondary" />
        </a>
      </div>
    </div>
  );
}

export default ContactUsInfo;
