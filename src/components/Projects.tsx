import React from "react";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import im1 from '../assets/images/im1.jpg';
import lms from '../assets/images/lms.png';
import nt from '../assets/images/nt.png';

const projects =[
    {
        id:1,
        title: "Virac Storm Surge Mapping System",
        description: "Led the full-stack development of the Virac Storm Surge Identification System, a web-based platform designed to identify storm surge-prone areas in Virac, Catanduanes. Developed the system using PHP for backend logic, with HTML, CSS, and Bootstrap for a responsive and user-friendly interface. Integrated a Geographical Information System (GIS) to provide interactive mapping and visualization of high-risk zones. Utilized QGIS software to create and process shapefiles, ensuring accurate and precise mapping data for the web system.",
        image: im1

    },

    {
        id: 2,
        title: "Library Management System",
        description: "Developed a web-based Library Management System as a full-stack developer using Angular for the frontend and C# for the backend. Implemented role-based access with dedicated Admin and User pages for efficient library management. Integrated time-tracking functionality to monitor book borrowing and returns. Additionally, incorporated an SMS notification feature to send automated reminders for due dates and important library updates.",
        image: lms,
    },

    {
        id: 3,
        title: "NoteTasking Mobile App",
        description: "Spearheaded the development of the NoteTasking mobile application, designed to help students take notes and manage tasks efficiently. Developed the app using Dart with the Flutter framework, enabling cross-platform compatibility for both Android and iOS. Implemented the Provider state management for clean code separation and maintainability. Integrated SQLite for local data storage, enabling offline access to notes and tasks. Leveraged Flutter's widget-based architecture to create a responsive and user-friendly UI, ensuring a seamless experience across different screen sizes.",
        image: nt,
    }

];

export default function Projects(){

    const navigate = useNavigate();
    return(
            <section id="projects" className="py-20 px-10 bg-gray-100">

            <h2 className="text-5xl font-bold text-center text-gray-700 mb-10">
                My Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index)=>(
                    <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg"
                    initial={{opacity: 0, y:50}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration: 0.5, delay: index * 0.2}}
                    viewport={{once: false}}
                    onClick={() => navigate(`/projects/${project.id}`,{ state: project})}
                    >
                        <img src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                        </h3>
                        <p className="text-gray-700 text-justify">{project.description.substring(0, 100)}...</p>
                    </motion.div>
                ))};
            </div>
        </section>
    )

}
