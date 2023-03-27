const ProjectCard = ({
  thumbnailImg,
  title,
  description,
  tech,
  github,
  demoLink,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col">
      <div className="relative">
        <img
          src={thumbnailImg}
          alt="thumbnail"
          className="w-full object-cover transition-all duration-500 transform hover:scale-110"
        />
      </div>
      <div className="p-4 flex-grow">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
        <div className="mt-4 flex flex-wrap">
          {tech?.map((item, index) => (
            <span
              key={index}
              className="text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white rounded-full py-1 px-2 mr-2 mb-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between max-w-full">
        <a
          href={github}
          className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-full py-2 px-4 text-sm transition duration-500 hover:bg-white/5"
        >
          Github
        </a>
        <a
          href={demoLink}
          className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-full py-2 px-4 text-sm transition duration-500 hover:bg-white/5"
        >
          Live Link
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
