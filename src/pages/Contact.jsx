import React from "react";
import { useState } from "react";



export default function Contact() {

  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [message, setMessage ] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function encode(data) {
    return Object.keys(data)
    .map(
      (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    )
    .join('&')
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    fetch('/' , {
      method: "POST",
      headers: {"content-type": "application/x-www-form_urlencoded"},
      body: encode({"form-name": "contact", name, email, message}),
    }) 
      .then(() => {
        alert("message envoyer !")
        setIsSubmitting(false);
      })
      .catch((error) => {
        alert(error)
        setIsSubmitting(false);
      });
  }



  return (
    <section id="contact" className="h-screen" aria-labelledby="contact form">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{
               filter: "opacity(0.7)",
               border: "none", // Remplace frameborder="0" 
               borderRadius: "inherit", // Peut remplacer le coin arrondi de l'iframe
              }}
            src="https://www.google.com/maps/embed/v1/place?q=Vosporou+81,+Thessaloniki,+Greece&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADRESSE
              </h2>
              <p className="text-white mt-1">
                81 Vosporou <br />
                Thessaloniki, 54454
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <p className="text-indigo-400 leading-relaxed">
                vixxxaz@protonmail.com
              </p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="text-white leading-relaxed">+30-694-626-3236</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          aria-labelledby="contact-form-title"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 id="contact-form-title" className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
            Embaucher moi 
          </h2>
          <p className="leading-relaxed mb-5">
            Contactez-moi pour tous projet de developpement web !
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
              aria-required="true"
              aria-invalid={!name ? "true" : "false"}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm  text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"             
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              aria-invalid={!email ? "true" : "false"}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm  text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"              
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
              required
              aria-required="true"
              aria-invalid={!message ? "true" : "false"}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            aria-live="polite"
            className="bg-gray-800 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}