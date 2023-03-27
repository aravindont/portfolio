import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <div className="flex justify-between items-center py-6">
      <button
        onClick={toggleTheme}
        className="flex items-center dark:text-white text-zinc-800 border dark:border-zinc-700 border-zinc-400 px-3 h-8 sm:text-lg rounded-full transition duration-500"
      >
        {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
      <div className="flex items-center text-xs sm:text-sm border dark:border-zinc-700 border-zinc-400 rounded-full">
        <a
          href="/"
          className="dark:text-white  dark:hover:bg-white/5 rounded-full py-2 px-4 transition duration-500"
        >
          Home
        </a>
        <a
          href="#projects"
          className="dark:text-white  dark:hover:bg-white/5 rounded-full py-2 px-4 transition duration-500"
        >
          Projects
        </a>
        <a
          href="https://aravind-ontagodi.hashnode.dev/"
          target="_blank"
          className="dark:text-white  dark:hover:bg-white/5 rounded-full py-2 px-4 transition duration-500"
        >
          Blogs
        </a>
      </div>
    </div>
  );
};

export default Navbar;
