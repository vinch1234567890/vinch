import React from "react";
import {motion} from "framer-motion";
import { ReactComponent as ReactLogo } from '../assets/logos/react-2.svg';
import { ReactComponent as TypeScriptLogo } from '../assets/logos/typescript.svg';
import {ReactComponent as AngularLogo} from '../assets/logos/angular-icon-1.svg';
import { ReactComponent as FlutterLogo } from '../assets/logos/flutter-logo.svg';
import { ReactComponent as JavaScriptLogo } from '../assets/logos/javascript-1.svg';
import {ReactComponent as FigmaLogo} from '../assets/logos/figma-icon.svg';
import {ReactComponent as WordPRessLogo} from '../assets/logos/wordpress-icon-1.svg';

const techStacks =[
    {name: "React", logo: <ReactLogo className="w-16 h-16"/>},
    {name: "TypeScript", logo: <TypeScriptLogo className="w-16 h-16"/>},
    {name: "Angular", logo: <AngularLogo className="w-16 h-16"/>},
    {name: "Flutter", logo: <FlutterLogo className="w-16 h-16"/>},
    {name: "JavaScript", logo: <JavaScriptLogo className="w-16 h-16"/>},
    {name: "Figma", logo: <FigmaLogo className="w-16 h-16"/>},
    {name: "WordPress", logo: <WordPRessLogo className="w-16 h-16"/>}
];

export default function Header(){
    return(
        <div className="mt-[70px] mb-[-100px] flex space-x-6 overflow-x-auto scrollbar-hide justify-center">
            {techStacks.map((tech, index) => (
                <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration: 0.5, delay: index * 0.2}}
                    viewport={{once: false}}
                >
                    {tech.logo}
                    <p className="text-sm text-gray-500 mt-2">
                        {tech.name}
                    </p>
                </motion.div>
            ))}
        </div>
    )
}
