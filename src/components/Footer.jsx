import React from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import moment from 'moment';
import {Link, useLocation} from 'react-router-dom'

const Footer = () => {

  const location = useLocation();

  return (
    <footer className=" bg-slate-500 fixed bottom-0 w-full " role="contentinfo">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-around">
        <p className='text-white'>{moment().format("MMM Do YY")}</p>   
            {location.pathname !== "/" && (
              <Link
                
                to="/"
                aria-label="Retour à l'accueil"
                className="inline-flex items-center bg-gray-300 font-bold border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded hover:text-white text-black text-base mt-4 md:mt-0"
                >
                retour a l'accueil
                <FaArrowLeft className="w-4 h-4 ml-1" aria-hidden="true"/>
              </Link>
            )}
          <Link to="/privacy-policy" className="mr-5 font-bold hover:text-white">Politique de Confidentialité</Link>
          <Link to="/cookie-policy" className="mr-5 font-bold hover:text-white">Politique de Cookies</Link>
          <Link to="/terms-and-conditions" className="mr-5 font-bold hover:text-white">Termes et Conditions</Link>
        </div>        
    </footer>
  )
}

export default Footer