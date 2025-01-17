"use client";
import React from "react";

/* 
Footer de la pagina home
*/

const Footer = () => {
  return (
    <footer className="bg-black shadow-gray-400 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <p className="text-white text-sm text-center">
            © {new Date().getFullYear()} EDUCANEG. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;