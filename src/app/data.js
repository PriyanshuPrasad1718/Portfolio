/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "MatteMaster",
    description: "Developed an advanced image matting solution using the U²-Net architecture to precisely remove backgrounds. Implemented deep learning techniques for semantic segmentation to achieve pixel-level accuracy.",
    date: "2024-04-15",
    demoLink: "https://github.com/PriyanshuPrasad1718/MatteMaster-Advanced-Image-Background-Removal",
  },
  {
    id: 2,
    name: "TrustCheck",
    description: "Develop a Chrome extension designed to identify fake news, trained using a dataset comprising Indian news articles. The extension will utilize two models for comparison: a decision tree classifier and an LSTM model, both aimed at predicting the authenticity of news articles.",
    date: "2024-03-20",
    demoLink: "https://github.com/PriyanshuPrasad1718/Chrome-extension-for-Indian-fake-news-detection",
  },
  {
    id: 3,
    name: "Deepfake Identification System",
    description: "Developed and implemented a MesoNet model utilizing Convolutional Neural Networks (CNNs) to detect deepfake images, leveraging a dataset of 190k real and fake images",
    date: "2024-02-10",
    demoLink: "https://github.com/PriyanshuPrasad1718/MesoNet-based-Deepfake-Identification-System",
  },
  {
    id: 4,
    name: "Road accident dashboard",
    description: "Created an engaging, visually appealing, and user-friendly dashboard using PowerBI to visualize data on road accidents.",
    date: "2024-03-12",
    demoLink: "https://github.com/PriyanshuPrasad1718/Road-Accidents-Dashboard",
  },
  {
    id: 5,
    name: "E-commerce Analytics Visualizations",
    description: "Developed an in-depth analysis and visually compelling , interactive and responsive dashboard using PowerBI for an ecommerce company.",
    date: "2023-11-18",
    demoLink: "https://github.com/PriyanshuPrasad1718/E-commerce-Analytics-Visualizations-with-a-Dashboard-using-PowerBI",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/PriyanshuPrasad1718",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/priyanshu-prasad-10a008254/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Resume (2).pdf",
    icon: "resume",
    newTab: true,
  },
];


