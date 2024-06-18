import React from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import moment from 'moment';
import {Link} from 'react-router-dom'

const Footer = () => {

  return (
    <footer className=" bg-slate-500  bottom-0 top-0 z-10 grow-1">
        <div className="justify-around container  mx-auto  flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <p className='text-white'>{moment().format("MMM Do YY")}</p>   
        <Link
         target='home'
          to="/"
          className=" inline-flex items-center bg-gray-300 font-bold border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded hover:text-white text-black text-base mt-4 md:mt-0">
          retour a l'accueil
          <FaArrowLeft className="w-4 h-4 ml-1" />
        </Link>
        </div>        
    </footer>
  )
}

export default Footer