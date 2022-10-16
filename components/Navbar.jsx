import { logo, wppLogo } from '../public/assets'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'
import styles from "../styles/style"
import { Fragment } from 'react'

const Navbar = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth} z-[100]`}>
    <nav className="w-full flex py-6 md:py-6 justify-between items-center navbar">
      <img rel="preload" src={logo} alt="service electrolux" className="w-[160px] h-[100%] -mt-2 md:mt-0"/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">      
        {navLinks.map((nav, index) => (
          <Fragment key={nav.id}>
          <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
          </Fragment>
        ))}
      </ul>

      <div className="block fixed bottom-0 left-0 w-[100vw] sm:hidden">
          <div className="flex absolute bottom-0 w-[46%] h-[42px] bg-primary rounded-tr-[36px] rounded-tl-[20px] shadow-[0_2px_4px_#726F96]"></div>
          <img 
          initial={{ scaleX: 1,  sclaeY: 1 }}
          animate={{ scaleX: 1.1, scaleY: 1.1, transition: { duration: 2, delay: 6, ease: "easeIn", repeat: Infinity, repeatType: "reverse" },}}
          src={wppLogo} alt="" height="58px" width="58px" className="absolute bottom-[4px] left-0 right-0 m-auto z-[100]"
          />
          <div className="flex absolute bottom-0 right-0 w-[46%] h-[42px] bg-primary rounded-tl-[36px] rounded-tr-[20px] shadow-[0_2px_4px_#726F96]"></div>
          <div className="absolute bottom-0 flex w-full h-[30px] bg-primary"></div> 
          <div className="flex justify-evenly items-center absolute bottom-0 px-0 w-[100vw] h-[42px]">
            {navLinks.map((nav, index) => (
              <Fragment key={nav.id}>
              <Link to={`/${nav.id}`}>
                <img
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -10, 10, -10, 10, -10, 10, 0], transition: { duration: 2, delay: 4, ease: "easeIn", repeat: Infinity, repeatDelay: 8, repeatType: "reverse" },}}
                src={nav.img} alt="links" className={`${index === 2 ? 'ml-24' : ''} text-center h-[28px] w-auto`} 
                />
              </Link>
              </Fragment>
            ))}
          </div>
      </div>      
    </nav>
    </div>
    </div>
  );
};

export default Navbar;
