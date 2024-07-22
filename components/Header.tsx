"use client";
import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div className={`relative bg-[#080D28] ${menuOpen ? 'h-screen' : 'h-auto'}`}>
          <div className="absolute inset-0 bg-[#080D28]"></div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex ml-[20px]">
                  <img src="logo.svg" alt="" />
                </a>
              </div>

              <div className="hidden lg:flex lg:items-center lg:space-x-10">
                <a href="#" title="" className="text-base font-light text-white hover:text-[20px]"> Products </a>
                <a href="#" title="" className="text-base font-light text-white hover:text-[20px]"> Pricings </a>
                <a href="#" title="" className="text-base font-light text-white hover:text-[20px]"> Company </a>
                <a href="#" title="" className="text-base font-light text-white hover:text-[20px]"> Resource </a>
                
              </div>

              <div className='hidden lg:flex mr-[80px]'>
              <a href="#" className="text-white font-medium text-[18px] pt-3 pr-5">Sign Up</a>
                  <a
                    href="#"
                    title=""
                    className="px-11 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#2f2f47] border border-transparent rounded-full hover:bg-[#1F1F39] focus:bg-[#1F1F39]"
                    role="button"
                  >
                    LOG IN
                  </a>
              </div>

              <button className="lg:hidden text-white mr-[20px]" onClick={handleMenu}>
                {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
              </button>
            </nav>

            {menuOpen && (
              <div className=" flex flex-col items-center justify-center mt-4 space-y-4 lg:hidden">
                <a href="#" title="" className="text-[20px] font-normal text-white hover:text-[20px]"> Products </a>
                <a href="#" title="" className="text-[20px] font-light text-white hover:text-[20px]"> Pricings </a>
                <a href="#" title="" className="text-[20px] font-light text-white hover:text-[20px]"> Company </a>
                <a href="#" title="" className="text-[20px] font-light text-white hover:text-[20px]"> Resource </a>
                
                
                <div className='flex flex-row items-center space-y-4 py-4 mt-4 border-t border-[#6B7280]'>
                  <a href="#" className="text-white font-medium text-[18px] mx-4 mt-4">Sign Up</a>
                  <a
                    href="#"
                    title=""
                    className="px-11 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#2f2f47] border border-transparent rounded-full hover:bg-[#1F1F39] focus:bg-[#1F1F39]"
                    role="button"
                  >
                    LOG IN
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
