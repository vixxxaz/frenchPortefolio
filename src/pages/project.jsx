
import {FaFileCode} from 'react-icons/fa'
import React from "react";
import { projects } from "../data/data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-600 body-font" aria-labelledby="projects-title">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FaFileCode className="mx-auto inline-block w-10 mb-4" aria-hidden="true"/>
          <h1 id="projects-title"  className="sm:text-xs md:text-3xl lg:text-5xl font-medium title-font mb-4 text-white">
            Mes réalisations :
          </h1>
          <p className="lg:w-2/3   sm:text-xs md:text-xl mx-auto leading-relaxed text-base font-bold text-white">
            Une partie des projets que j'ai réalisés, pendant ma formation openClassRoom developpeur web.
            Formation de six mois ,certification de niveau cinq, j'espere ajouter de nouveaux projetx au plus vite !
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              aria-label={`Project ${project.title}: ${project.subtitle}`}
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt={`illustration du projet ${project.title}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}