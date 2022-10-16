import styles from "../constants/style"
import Image from 'next/image'
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";

const SolicitarTecnico = () => {
  // const {ref, inView} = useInView();
  // const animation = useAnimation();

  // useEffect(() => {
    //console.log(inView)
  //   if(inView){
  //     animation.start({       
  //       opacity: 1, scale: 1,
  //       transition: {
  //         default: {
  //           duration: 0.3,
  //           ease: [0, 0.71, 0.2, 1.01], 
  //           delay: 0.25,
  //         },
  //         scale: {
  //           type: "spring",
  //           damping: 5,
  //           stiffness: 100,
  //           restDelta: 0.001, 
  //           delay: 0.25,
  //           repeat: 3,
  //           repeatDelay: 4,
  //         }  
  //       }
  //     })
  //   }
  //   if(!inView){
  //     animation.start({opacity: 0})
  //   }
  // }, [inView]);

  return(
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full border-2 border-[#5ce1e6] p-[2px] cursor-pointer z-[1]`}>
    <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
          <span className="text-gradient">Solicitar</span>
        </p>
        <Image src="/arrow-up.svg" width="23" height="23" alt="arrow" className="object-contain" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">un Técnico</span>
      </p>
    </div>
  </div>
)};

export default SolicitarTecnico;
