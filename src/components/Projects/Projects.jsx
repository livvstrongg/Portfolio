import React from "react";
import war from "../Images/war.png"
import lesemotifs from "../Images/lesemotifs.png"
import oliveskin from "../Images/oliveskin.png"
import dannygram from "../Images/dannygram.png"


function Projects(){

    const projects = [
        {
            id: 1, 
            src: war,
            name: "Game of War",
            demo: "https://livvstrongg.github.io/Game-of-War/",
            code: "https://github.com/livvstrongg/Game-of-War"
        },
        {
            id: 2, 
            src: lesemotifs,
            name: "Recipe Search App",
            demo: "https://lesemotifsanonymes.herokuapp.com/",
            code: "https://github.com/livvstrongg/LesEmotifsAnonymes",
        },
        {
            id: 3, 
            src: oliveskin,
            name: "E-commerce Store",
            demo: "https://tranquil-begonia-e33eb9.netlify.app/",
            code: "https://github.com/livvstrongg/olive_skin_frontend",
        },
        {
            id: 4, 
            src: dannygram,
            name: "Social Media App",
            demo: "https://polar-bastion-57023.herokuapp.com/posts",
            code: "https://github.com/mo4rahman/dannygram",
        },
    ]

    return(
        <div name="projects" className="w-full md:h-screen bg-gradient-to-b from-[#282C2F] to-[#323639] text-[#f1f0ec]">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#00FFFF]">Projects</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 px-12 sm:px-0">
                    {projects.map(({id, src, name, demo, code})=> {
                        return(
                            <div key={id} style={{backgroundImage: `url(${src})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                                <div className="opacity-0 group-hover:opacity-100">
                                    <span className="text-2xl font-bold tracking-wider">
                                        {name}
                                    </span>
                                    <div className="pt-8 text-center">
                                        <a href={demo} target="_blank" rel="noopener noreferrer">
                                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#323639] text-[#f1f0ec] font-bold text-lg">Demo</button>
                                        </a>
                                        <a href={code} target="_blank" rel="noopener noreferrer">
                                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#323639] text-[#f1f0ec] font-bold text-lg">Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Projects;