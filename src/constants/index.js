import projectImg1 from "../assets/139280-OT8HQA-203.jpg";
import { RiReactjsLine,RiCss3Line, RiHtml5Line, RiJavascriptLine, RiBriefcaseLine, RiGraduationCapLine } from "react-icons/ri";
import { SiDotnet, SiVuedotjs, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { FaNodeJs, FaPython } from "react-icons/fa6";
import LandingPage from "../assets/LandingPage.png"

export const introduction_Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const about_me = [
    `Hi! I’m Letlhogonolo Rakgantsho, also known as Eaziey, a dedicated Junior Full‑Stack Developer
     with a genuine passion for building functional and meaningful digital experiences.`,
    `My journey into tech began with a curiosity about how apps and systems work, which 
    eventually led me to pursue a BSc in IT in Information and Knowledge Systems at the 
    University of Pretoria. There, I built a strong foundation in software engineering, 
    web development, database design, and computer security.`,
    `Outside of development, I enjoy exploring music, fashion, football, and anything that 
    sparks creativity. Whether I’m discovering new sounds or diving into new ideas, these 
    interests keep me inspired and influence how I approach design and problem‑solving.`,
    `Make sure you check out my development journey by clicking on the button below.`
]

export const contact_message= `I am currently looking for graduate programmes, Internships
or entry level opportunities within the Software Engineering field.

My inbox is always open. Whether you have an opportunity for me or you just want to say Hi,
contact me and I'll definitely get back to you :).`;

export const xp = [
    {
        year : "2025 - Present",
        role: "Junior Full stack developer (Graduate)",
        company: "Tourvest Travel Services",
        description: `Currently completing a 12‑month Graduate Internship at Tourvest Travel Services(TravelIT), contributing to the development and maintenance of internal and client-facing platforms using C#, .NET Core, Vue.js, and related technologies.`,
        technologies: ["C++", "C#", "Java", "React.js", "Javascript", "HTML", "CSS", "Tailwind css", "BootStrap", "MongoDB", "Postgresql", "Node.js", "Express.js", "Git"  ],
        icon: RiBriefcaseLine
    },
    {
        year : "2021 - 2025",
        role: "Student",
        company: "University of Pretoria",
        description: `I began my tech journey in 2021 when I joined the University of Pretoria as an undergraduate. I later graduated in 2025 with a full‑time BSc in IT (Information and Knowledge Systems), focusing on core software engineering and system design.`,
        technologies: ["C++", "C#", "Java", "React.js", "Javascript", "HTML", "CSS", "Tailwind css", "BootStrap", "MongoDB", "Postgresql", "Node.js", "Express.js", "Git"  ],
        icon: RiGraduationCapLine
    }

]

export const projects = [
    {
        id : 1,
        title : "GitSplore",
        image: LandingPage,
        description: `App to explore any public GitHub user’s repositories and commits.
        Search repos, view commit logs, drill into commit details (files changed, additions/deletions, diffs), mark commits as favourites, sort & paginate`,
        technologies: ["Vue.js", "Typescript","TailwindCSS","Vitest"],
        tag: ["All", "Frontend"],
        gitUrl: "https://github.com/Eaziey/GitHub_Commit_Explorer",
        liveWebUrl: "https://eaziey.github.io/GitHub_Commit_Explorer/"
    },
    {
        id : 2,
        title : "My Project2",
        image: projectImg1,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
        technologies: ["React.js", "Javascript","Tailwind css","MongoDB", "Node.js", "Express.js"],
        tag: ["All", "Fullstack"],
        gitUrl: "/",
        liveWebUrl: "/"
    },
    {
        id : 3,
        title : "My Project3",
        image: projectImg1,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
        technologies: ["React.js", "Javascript","Tailwind css","MongoDB", "Node.js", "Express.js"],
        tag: ["All", "Backend"],
        gitUrl: "/",
        liveWebUrl: "/"
    },
    {
        id : 4,
        title : "My Project3",
        image: projectImg1,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
        technologies: ["React.js", "Javascript","Tailwind css","MongoDB", "Node.js", "Express.js"],
        tag: ["All", "Backend"],
        gitUrl: "/",
        liveWebUrl: "/"
    },
    {
        id : 5,
        title : "My Project3",
        image: projectImg1,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
        technologies: ["React.js", "Javascript","Tailwind css","MongoDB", "Node.js", "Express.js"],
        tag: ["All", "Backend"],
        gitUrl: "/",
        liveWebUrl: "/"
    }
]

export const techStack = [
    {
        tech: "React",
        icon: RiReactjsLine,
        proficiency: "Beginner",
        type: 2,
        tag: ["Secondary"]
    },
    {
        tech: "CSS",
        icon: RiCss3Line,
        proficiency: "Intermediate",
        type: 1,
        tag: ["Primary"]
    },
    {
        tech: "Javascript",
        icon: RiJavascriptLine,
        proficiency: "Intermediate",
        type: 1,
        tag: ["Primary"]
    },
    {
        tech: "Html",
        icon: RiHtml5Line,
        proficiency: "Intermediate",
        type: 1,
        tag: ["Primary"]
    },
    {
        tech: "Node.js",
        icon: FaNodeJs,
        proficiency: "Beginner",
        type: 2,
        tag: ["Secondary"]
    },
    {
        tech: "Postgresql",
        icon: BiLogoPostgresql,
        proficiency: "Beginner",
        type: 2,
        tag: ["Secondary"]
    },
    {
        tech: "Mongodb",
        icon: SiMongodb,
        proficiency: "Beginner",
        type: 2,
        tag: ["Secondary"]
    },
    {
        tech: "TailwindCSS",
        icon: BiLogoTailwindCss,
        proficiency: "Intermediate",
        type: 1,
        tag: ["Primary"]
    },
    {
        tech: "Dotnet",
        icon: SiDotnet,
        proficiency: "Beginner",
        type: 1,
        tag: ["Primary"]
    },
    {
        tech: "Vue.js",
        icon: SiVuedotjs,
        proficiency: "Beginner",
        type: 1,
        tag: ["Primary"]
    },
    {
        tech: "Python",
        icon: FaPython,
        proficiency: "Beginner",
        type: 3,
        tag: ["Learning"]
    },
  ];