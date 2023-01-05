import React from "react";
import { Logo } from "../../assets";
import { motion } from "framer-motion";

const Navbar = () => {
  const variantLogo = {
    hidden: {
      opacity: 0.1,
    },
    visible: {
      opacity: 1,
      x: 40,
    },
  };
  const variantNavbar = {
    hidden: {
      opacity: 0.1,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.05,
      },
    },
  };
  const variantNavItem = {
    hidden: {
      opacity: 0,
      y: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn",
        duration: 0.1,
      },
    },
  };

  return (
    <div className="flex md:flex-row flex-col flex-wrap   justify-between  px-10 py-5 bg-slate-100 border-b-2">
      <motion.div
        variants={variantLogo}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
        }}

      >
        <img src={Logo} className="object-contain" alt="" />
      </motion.div>
      <motion.div
        // variants={variantNavbar}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center mt-5 md:mt-0  gap-5 items-center font-[Nunito]"
      >
        <motion.div 
        // variants={variantNavItem}
         className="cursor-pointer">
          ABOUT
        </motion.div>
        <motion.div 
        // variants={variantNavItem}
         className="cursor-pointer">
          ACADEMICS
        </motion.div>
        <motion.div 
        // variants={variantNavItem}
         className="cursor-pointer">
          ADMISSIONS
        </motion.div>
        <motion.div 
        // variants={variantNavItem}
         className="cursor-pointer">
          PARENT GUIDE
        </motion.div>
        <motion.div 
        // variants={variantNavItem}
         className="cursor-pointer">
          CAMPUS LIFE
        </motion.div>
        <motion.div 
        // variants={variantNavItem}
         className="cursor-pointer">
          CONTACT
        </motion.div>
        <motion.div 
        // variants={variantNavItem}
         className="cursor-pointer">
          CAREERS
        </motion.div>
        <motion.div 
        // variants={variantNavItem}
         className="cursor-pointer">
          ENGLISH
        </motion.div>
      </motion.div>
      <div className="flex justify-center mt-4 md:mt-0">
      <div className="flex w-fit items-center bg-[#fabe25] px-5 py-2 border-2 border-solid border-yellow-500 rounded-md font-medium md:tracking-[1px]">
        Contact Us
      </div>
      </div>
    </div>
  );
};

export default Navbar;
