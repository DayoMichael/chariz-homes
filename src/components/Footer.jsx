import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import UpsideRightArrow from '../assets/la-icons/upside-right-arrow.svg';
import Facebook from '../assets/la-icons/facebook-icon.svg';
import Linkedin from '../assets/la-icons/linkedin-icon.svg';
import Twitter from '../assets/la-icons/twitter-icon.svg';
import Instagram from '../assets/la-icons/instagram.svg';

const Footer = () => {
    const navigate = useNavigate()
  const textVariants = {
    initial: { fontSize: '4.5rem', fontWeight: '300' },
    hovered: { fontSize: '5.1rem', fontWeight: '600' },
  };

  return (
    <footer className="bg-[#F29254] py-24">

        <div className="w-full pb-12 border-b border-white max-w-[80vw] lg:max-w-[90vw] mx-auto">
          <div className="relative w-full flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="relative w-fit">
              <motion.div
                variants={textVariants}
                initial="initial"
                whileHover="hovered"
                transition={{ duration: 0.2 }}
              >
                <h3 className="relative text-[#fff] font-nexa duration-300">
                  Let's Talk
                </h3>
              </motion.div>
              <img
                src={UpsideRightArrow}
                alt=" "
                className="w-[30px] md:w-[55px] absolute -top-5 left-3/4 sm:left-auto sm:-right-8 md:-right-16 md:-top-14"
              />
            </div>

            <div className="hidden md:block">
              <p
                className="text-xs font-nexa text-[#fff]"
                
              >
                About us
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-y-14 w-full items-start justify-between mt-10">
            <div className="flex flex-col gap-y-14 md:gap-y-5">
              <div className="text-xs font-nexa-light">
                <p className="text-[#fff] mb-2.5">General enquiries</p>
                <a
                  className="text-white"
                  href="mailto:mailto:business@lachariz.com"
                >
                  mailto:business@lachariz.com
                </a>
              </div>

              <div className="text-xs font-nexa-light mt-10">
                <p className="text-[#fff] mb-2.5">Office Address</p>
                <p className="text-white">
                  4th Floor, Ocean Centre,
                  <br />
                  off Oladipo Diya Road, Gudu,
                  <br />
                  Apo Abuja.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="text-xs font-nexa-light flex flex-col items-start md:items-end">
                <p className="text-[#fff] text-start md:text-end mb-3">Social Media</p>
                <div className="flex flex-row items-center justify-center gap-x-10">
                  <img src={Linkedin} alt="LinkedIn" />
                  <img src={Twitter} alt="Twitter" />
                  <img src={Instagram} alt="Instagram" />
                  <img src={Facebook} alt="Facebook" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-y-3 sm:items-center justify-center text-xs font-nexa-light mt-7 gap-x-10">
                <p className="text-white">Terms and Conditions</p>
                <p class="text-white">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="text-white font-nexa-light text-sm text-center font-thin">
            All Rights Reserved <span className="text-lg font-thin">&copy;</span> La Chariz Group 2023
          </h4>
        </div>
    </footer>
  );
};

export default Footer;