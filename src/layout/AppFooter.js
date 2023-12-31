import React, { useEffect, useState } from 'react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


const AppFooter = (props) => {
   const {isDark} = props

   return (
      <footer className="bg-white fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
         <div className="mx-auto w-full p-2 py-6 lg:py-8">
            
            <div className="w-full sm:flex sm:items-center sm:justify-between">
               <Footer.Copyright href="#" by="byeol.oh" year={2023} />
               <div className="mt-1 flex space-x-6 sm:mt-0 sm:justify-center">
                  <Footer.Icon href="#" icon={BsFacebook} />
                  <Footer.Icon href="#" icon={BsInstagram} />
                  <Footer.Icon href="#" icon={BsGithub} />
               </div>
            </div>

         </div>
      </footer>
   )
}

export default React.memo(AppFooter)
