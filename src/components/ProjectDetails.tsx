import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

export default function ProjectsDetails(){
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state;

    if (!project){
        return <div className="text-center mt-20 text-gray-500">Project not Found</div>;
    }

    return(
        <motion.div 
        className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10 bg-gray-100"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
        >
            <div className="w-full md:w-1/2 pr-10">
            <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
            <p className="text-gray-700 mt-4 text-justify">{project.description}</p>
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
            onClick={()=>navigate(-1)}>
                Back to Projects
            </button>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
            src={project.image}
            alt={project.title}
            className="rounded-lg shadow-lg w-full max-w-md"
            initial={{scale:0.8}}
            animate={{scale:1}}
            transition={{duration:0.3}}
            />
            </div>

        </motion.div>
    )
}