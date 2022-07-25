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
        <div name="projects">
                    <h1>Projects</h1>
                    {projects.map(({id, src, name, demo, code})=> {
                        return(
                            <div key={id} style={{backgroundImage: `url(${src})`}}>
                                <div>
                                    <span className="text-2xl font-bold tracking-wider">
                                        {name}
                                    </span>
                                    <div className="pt-8 text-center">
                                        <a href={demo} >
                                            <button>Demo</button>
                                        </a>
                                        <a href={code} target="_blank" rel="noopener noreferrer">
                                            <button>Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
    )
}

export default Projects;