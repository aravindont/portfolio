import savifyImg from "../assets/thumbnail/contact-list.png";
import mobileImg from "../assets/thumbnail/home-page.png";
import todoImg from "../assets/thumbnail/dashboard-page.png";

export const projects = [
  {
    id: 1,
    thumbnailImg: savifyImg,
    title: "Savify",
    description:
      "A Open Source Github readme builder. Use prebuilt templates, sections or create a new one.",
    tech: ["React", "Bootstrap", "json-server"],
    github: "https://github.com/starc007/readmi",
    demoLink: "https://readmi.xyz/",
  },
  {
    id: 2,
    thumbnailImg: mobileImg,
    title: "Mobile Shop",
    description:
      "A Open Source wallet connection library for your decentralized application",
    github: "https://github.com/starc007/web3-wallet-connect",
    demoLink: "https://www.npmjs.com/package/web3-wallet-connect",
    tech: ["React", "json-server", "tailwindcss"],
  },
  {
    id: 3,
    thumbnailImg: todoImg,
    title: "TODO App",
    description:
      "A decentralized Payment protocol where you can send/ buy crypto using INR. You can also Lend or swap your tokens. Built on top of Polygon",
    github: "https://github.com/starc007/zeno-prod",
    demoLink: "https://zenoo.netlify.app/",
    tech: ["React", "tailwindcss"],
  },
];
