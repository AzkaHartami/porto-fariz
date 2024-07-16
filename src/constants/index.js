import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.webp";
import project3 from "../assets/projects/project3.jpg";

export const HERO_CONTENT = `I am a dedicated System Administrator with a passion for maintaining and optimizing IT infrastructure. With 1 year of hands-on experience, I have honed my skills in managing servers, networks, and cloud environments. Proficient in technologies like Linux, Windows Server, AWS, and Azure, I excel at ensuring system reliability, security, and performance. My goal is to leverage my expertise to create robust and scalable solutions that support business growth and deliver seamless user experiences.`;

export const ABOUT_TEXT = `I am an eighth-semester undergraduate student currently studying at the University Maritime Raja Ali Haji under the Faculty of Engineering within the Department of Informatics Engineering. Throughout my academic journey, I have developed a strong foundation in various aspects of information technology, with a particular focus on system administration. My studies have equipped me with comprehensive knowledge and practical skills in managing and maintaining IT infrastructure, including server administration, network management, and cloud computing on platforms such as Linux, Windows Server, AWS, and Azure. Additionally, I have a solid understanding of cybersecurity principles, ensuring the reliability, security, and performance of IT systems. As a passionate and dedicated system administrator, my goal is to leverage my academic background and technical expertise to contribute effectively to the IT industry, driving innovation and supporting organizational growth through efficient and secure IT infrastructure management.`;

export const EXPERIENCES = [
  {
    year: "August - 2023 December",
    role: "Intern Mentor",
    company: "PT Kinema Systrans Multimedia (Infinite Learning)",
    description: `Serving as a personal mentor for 20 mentees in the Red Hat Certified System Administrator Independent Study Program at Kampus Merdeka.
Assisting in mentoring 4 groups, with each group consisting of 4-5 mentees in the Capstone Project, in the QRadar field.
Train mentee on how to operate Red Hat Enterprise Linux, and prepare students for the EX200 exam to attain Red Hat Certified System Administrator (RHCSA) certification.
Train mentee on how to approach integrating theoretical fundamentals and practical applications, utilizing IBM modules, and harnessing IBM Cloud services and products.
`,
    technologies: ["Linux"],
  },
  {
    year: "Sept 2022 - February 2023",
    role: "Full Stack Web Developer",
    company: "Badan Riset dan Inovasi Nasional",
    description: `Developing a website for the Electric Vehicle Charging Station Management.
Create a Dashboard page, sign-up page, login page, transaction page, and summary page.
In the development section, I'm using ReactJS for Frontend, Express for Backend, and MySQL for Database.
Learning about electric vehicle and electric charger station landscape.
`,
    technologies: ["ReactJS", "Express JS", "MySQL"],
  },
  {
    year: "June - July 2022",
    role: "Data Entry Operator",
    company: "BPS Provinsi Kepulauan Riau",
    description: `As a data entry operator, I input the data that has been collected into the system database.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Weather App",
    image: project1,
    description:
      "A fully functional weather app using Flutter with features like real-time weather updates, daily forecasts, location search, geolocation, and weather notifications. Check it out on [GitHub](https://github.com/farizrahmat1/SkyView-Weather-App).",
    technologies: ["Flutter", "Dart", "API"],
  },
  {
    title: "PC Builder",
    image: project2,
    description:
      "A comprehensive PC Builder app that allows users to customize and build their own PC configurations. Features include selecting components such as CPU, GPU, RAM, storage, and more, with real-time compatibility checks and pricing updates. Check it out on [GitHub](https://github.com/farizrahmat1/pc-builder.html).",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "SONIK",
    image: project3,
    description:
      "A comprehensive electric vehicle charging system (SONIK) built using JavaScript. Features include real-time monitoring of charging status, user authentication, payment processing, and integration with various charging stations. Check it out on [GitHub](https://github.com/farizrahmat1/sonik-23-maret).",
    technologies: ["JavaScript"],
  },
];

export const CONTACT = {
  address: "Jl Pemuda, Tanjungpinang, Kepulauan Riau ",
  phoneNo: "+62 857-6527-7473 ",
  email: "farizrahmat41@gmail.com",
};
