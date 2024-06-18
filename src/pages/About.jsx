import React from 'react'
import { Link } from 'react-router-dom'
import moi from '../Assets/moio3.jpeg'

const About = () => {
  return (
    <section className='bg-gray-600 body-font '>        
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">        
          <img
            className="object-cover object-center rounded-full"
            alt="moi"
            src={moi}
          />        
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Bonjour à tous, je m'appel Vincent.
            <br className="hidden lg:inline-block" />J'aime coder et construire des sites internet ou des applications web !
          </h1>
          <p className="mb-8 leading-relaxed font-bold text-white">
            Je fini tous juste une formation de six mois où j'ai appris enormement de chose, Html, css, sass, javascript, et fini par developpez un projet MERN.
            J'ai developpez une API restfull et un reseau social avec react mongoo et node.js
            Ce diplome et de niveau 5, Bac +2. J'ai pu lors de cette formation realiser auprés de OPENCLASSROOM developpez plusieurs projet dont vous avez un apercu
            dans ce portefolio où sur mon github.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex font-semibold text-black bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contactez-moi ici pour une mission.
            </Link>
            <Link
              to="/"
              className="ml-4 inline-flex font-semibold text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Regardez ici mes projets
            </Link>
          </div>
        </div>        
      </div>
    </section>
  )
}

export default About