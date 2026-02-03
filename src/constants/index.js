import projectImg1 from "../assets/139280-OT8HQA-203.jpg";
import { RiReactjsLine,RiCss3Line, RiHtml5Line, RiJavascriptLine } from "react-icons/ri";
import { SiDotnet, SiVuedotjs, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { FaNodeJs, FaPython } from "react-icons/fa6";

export const introduction_Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const about_me = `I am a BSc in IT Information and Knowledge Systems graduate from the University of Pretoria with hands-on experience in software development through academic projects in web development, database management, and computer security. 
Highly motivated to pursue graduate opportunities in software development, with a focus on building
efficient, user-friendly web applications and advancing solutions in computer security. Passionate about
leveraging technical expertise to drive innovation and deliver impactful, real-world solutions within the
industry.`

export const contact_message= `I am currently looking for graduate programmes, Internships
or entry level opportunities within the Software Engineering field.

My inbox is always open. Whether you have an opportunity for me or you just want to say Hi,
contact me and I'll definitely get back to you :).`;

export const xp = [
    {
        year : "2025 - 2026",
        role: "Intern",
        company: "Tourvest Travel Services",
        description: `Took on a 12 months Internship at Tourvest Travel Services`,
        technologies: ["C++", "C#", "Java", "React.js", "Javascript", "HTML", "CSS", "Tailwind css", "BootStrap", "MongoDB", "Postgresql", "Node.js", "Express.js", "Git"  ]
    },
    {
        year : "2021 - 2024",
        role: "Student",
        company: "University of Pretoria",
        description: `Studied full time for an undergraduate degree. Finally
        graduated with a BSc in IT in Information and Knowledge Sytems , majoring in software development in 2025.`,
        technologies: ["C++", "C#", "Java", "React.js", "Javascript", "HTML", "CSS", "Tailwind css", "BootStrap", "MongoDB", "Postgresql", "Node.js", "Express.js", "Git"  ]
    }

]

export const projects = [
    {
        id : 1,
        title : "My Project1",
        image: projectImg1,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
        technologies: ["React.js", "Javascript","Tailwind css","MongoDB", "Node.js", "Express.js"],
        tag: ["All", "Frontend"],
        gitUrl: "/",
        liveWebUrl: "/"
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