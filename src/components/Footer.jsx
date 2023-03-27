import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const commonClass =
  "dark:hover:text-white transition duration-500 hover:text-zinc-700";

const Footer = () => {
  return (
    <div className="py-10 flex justify-between flex-wrap gap-4 dark:text-zinc-400 text-zinc-500 font-medium text-lg">
      <div className="flex space-x-5 items-center text-2xl">
        <a
          href="https://github.com/aravindont"
          target="_blank"
          className={commonClass}
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aravind-ontagodi"
          target="_blank"
          className={commonClass}
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.twitter.com/aravindontagodi"
          target="_blank"
          className={commonClass}
          rel="noreferrer"
        >
          <AiOutlineTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
