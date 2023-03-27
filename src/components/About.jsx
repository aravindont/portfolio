import resume from "../assets/aravind-resume.pdf";

const About = () => {
  return (
    <div className="md:py-36 py-12 flex items-center ">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="md:w-3/4 md:px-2">
          <p className="text-3xl sm:text-5xl font-bold animate1">
            <span className="dark:text-white">Aravind Ontagodi</span>
          </p>
          <p className="text-zinc-500 mb-6 md:text-lg text-sm dark:text-white">
            Frontend Developer.
          </p>
          <p className="text-zinc-500 mb-6 md:text-lg text-sm dark:text-white">
            I am currently working as a Software Engineer at TCS.
          </p>
          <p>
            <span className=" text-zinc-500 font-medium dark:text-white">
              Tech Stack:
            </span>
            JavaScript, HTML, CSS, React, Node.js, Tailwind CSS
          </p>
          <a
            href={resume}
            download
            className="sm:w-24 w-20 sm:h-11 h-10 mt-8 rounded flex items-center justify-center md:text-base text-sm border border-zinc-700 dark:text-white hover:bg-white/5 transition duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
