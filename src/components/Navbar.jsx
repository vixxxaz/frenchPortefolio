import {FaArrowRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-slate-400 md:sticky top-0 z-10">
      <h1 className='text-xl text-center text-black'>Mon portefolio</h1>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="title-font font-medium text-black mb-4 md:mb-0">
          <Link  to="/about" className="ml-3 text-xl">
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
        <a href="#about" className="title-font font-medium text-black mb-4 md:mb-0">
          <Link  to="/about" className="ml-3 text-xl">
            Contactez moi
          </Link>
        </a>
      </div>
    </header>
  );
}