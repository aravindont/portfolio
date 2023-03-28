import savifyImg from "../assets/thumbnail/contact-list.png";
import mobileImg from "../assets/thumbnail/home-page.png";
import todoImg from "../assets/thumbnail/dashboard-page.png";
import passwordGenImg from "../assets/thumbnail/password-generator.png";
export const projects = [
  {
    id: 1,
    thumbnailImg: savifyImg,
    title: "Savify",
    description:
      "A Open Source Github readme builder. Use prebuilt templates, sections or create a new one.",
    github: "https://github.com/aravindont/savify-client",
    demoLink: "https://contacts-savify.netlify.app/",
    tech: ["React", "Bootstrap", "json-server", "fontawesome icons"],
  },
  {
    id: 2,
    thumbnailImg: mobileImg,
    title: "Mobile Shop",
    description: "mobile shop application helps users to add items to cart",
    github: "https://github.com/aravindont/mobile-shop-client",
    demoLink: "https://mobile-shop-cart-update.netlify.app/",
    tech: ["React", "json-server", "tailwindcss", "redux", "redux toolkit"],
  },
  {
    id: 3,
    thumbnailImg: todoImg,
    title: "TODO App",
    description:
      "TODO App is web app helps user to create,read,update,delete todos basically perform CRUD operations",
    github: "https://github.com/aravindont/todo-frontend",
    demoLink: "https://github.com/aravindont/todo-frontend",
    tech: [
      "React",
      "tailwindcss",
      "Nodejs",
      "Expressjs",
      "Appwrite",
      "redux",
      "redux toolkit",
      "MERN",
    ],
  },
  {
    id: 4,
    thumbnailImg: passwordGenImg,
    title: "Password Generator",
    description:
      "generates the password for the given password length and also password contains the selected option characters",
    github: "https://github.com/aravindont/react-password-generator",
    demoLink: "https://reactt-random-password-generator.netlify.app/",
    tech: ["React", "Bootstrap", "fontawesome icons"],
  },
];
