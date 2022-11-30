import {FaArrowRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-slate-500 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0">
          <Link to="/about" className="ml-3 text-xl">
            Gardet Vincent
          </Link>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 font-bold hover:text-white">
            Projet
          </Link>
          <Link to="/connaissance" className="mr-5 font-bold hover:text-white">
            Connaissances
          </Link>
          <Link to="/avis" className="mr-5 font-bold hover:text-white">
            Avis
          </Link>
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center bg-gray-600 font-bold border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded hover:text-white  text-base mt-4 md:mt-0">
          Contactez moi
          <FaArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  );
}