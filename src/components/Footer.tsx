import React from "react";
import { MailOutline, LocationOn, LinkedIn, GitHub, Phone } from "@mui/icons-material";






export default function Footer() {

    

    return (
        
        <footer className="flex justify-center mt-10 mb-16">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Contact Me
                </h2>
                <p className="text-gray-600 mb-6">
                    Let's connect! Feel free to reach out.
                </p>
                <div className="flex flex-col space-y-4">
                    <a href="mailto:vinchent.tp@gmail.com" className="flex items-center justify-center space-x-3 text-gray-700 hover:text-blue-500">
                        <MailOutline className="text-xl" />
                        <span className="text-2xl font-bold">Vinchent Pantino</span>
                    </a>
                    <div className="flex items-center justify-center space-x-3 text-gray-700">
                        <LocationOn className="text-xl" />
                        <span>Marilima, Virac, Catanduanes 4800, Region 5, Philippines</span>
                    </div>
                    <a href="https://www.linkedin.com/in/vinchent-pantino" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                        <LinkedIn className="text-xl" />
                        <span>LinkedIn</span>
                    </a>

                    <a href="https://github.com/vinch1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
                        <GitHub className="text-xl" />
                        <span>Github</span>
                    </a>

                    <a href="tel:+639307018334" className="flex items-center space-x-3 text-gray-700 hover:text-blue-500"> 
                        <Phone className="text-xl" />
                        <span>Call Me</span> 
                    </a>

                    
                </div>
            </div>
        </footer>
    );
}
