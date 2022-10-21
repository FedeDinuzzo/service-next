import styles from "../constants/style"
import Image from 'next/image'
import SolicitarTecnico from "./SolicitarTecnico"
import Ball from "./animations/Ball"
import autorizado from "../public/autorizado.svg"
import robotHand from "../public/robot-hand.webp"
import heroVector from "../public/Vector.svg"

const Hero = ({ textOne, textTwo, textThree, titleOne, titleTwo, titleThree, img }) => { 
  return(
    <section id="home" class={`flex md:flex-row flex-col ${styles.paddingY} lg:mt-[4px] xl:-mt-16`}>
    <div class={`flex-1 ${styles.flexStartHero} flex-col xl:px-0 sm:px-16 px-6`}>
      <div class="fadeTop flex flex-row items-center -mt-9 sm:mt-0 lg:mt-[28px] xl:mt-0 py-[3px] xl:py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <Image src={autorizado} alt="autorizado" class="w-[32px] h-[32px]" />
        <p class={`${styles.paragraph} `}>
          <span class="text-white">{textOne} </span>
          {textTwo} {" "}
          <span class="text-white">{textThree}</span>
        </p>
      </div>
      
      <div class="flex flex-row justify-between items-center w-full">
        <div class="absolute z-[0] w-[60%] h-[20%] -left-[50%] rounded-full bg-white blur-[250px]" />
        <h1 class="fadeLeft flex-1 font-poppins font-semibold text-[42px] md:text-[52px] xl:text-[68px] text-white leading-[46px] md:leading-[70px] xl:leading-[90px]">
          {titleOne} <br class="sm:block hidden"/> {" "}
          <span class="text-gradient">{titleTwo}</span> {" "}
        </h1>
        <div class="ss:flex hidden md:mr-4 mr-0">
          <SolicitarTecnico />
        </div>
      </div>

      <h1 class="fadeLeft font-poppins font-semibold text-[42px] md:text-[52px] xl:text-[68px] text-white leading-[46px] md:leading-[70px] xl:leading-[90px] w-full">
        {titleThree}
      </h1>
      <div class="appear2">
        <p class={`${styles.paragraph} max-w-[470px] mt-2 sm:hidden`}>Service en CABA y BUENOS AIRES de Heladeras y Lavarropas Electrolux.</p>
        <p class={`${styles.paragraph} max-w-[470px] mt-5 hidden md:block`}>Service en CABA y BUENOS AIRES de Heladeras y Lavarropas Electrolux. Desliza e infórmate acerca de nuestra forma de trabajo.</p>
      </div>
    </div>
    

    <div class="absolute z-[0] w-[40%] h-[70%] top-[0%] right-0 lg:-right-[15%] rounded-full blue__gradient opacity-80" />
    <div class="absolute z-[0] w-[40%] h-[40%] -top-[20%] right-0 rounded-full pink__gradient" />
    <div class={`flex-1 flex ${styles.flexCenter} my-0 md:my-10 mb-10 md:mb-0 relative`}>
      <div class="w-[6%] sm:w-[34%] md:w-[14%] xl:w-[0%]"/>
      <div class="w-[94%] sm:w-[70%] md:w-[86%] xl:w-[100%] h-[100%] relative z-[5] pb-[400px] sm:pb-[500px] md:pb-[640px]">
        <div class="absolute right-[12%]">
          <Image src={heroVector} alt="" class="heroVector"/>
        </div>
        <div class="absolute">
          <Image src={img} priority alt="fondo" class="heroImg"/>
        </div>
        
        <div class="balls">
        <div class="absolute left-[15%] top-[54%] hidden xl:block">
          <Ball w={36} h={200} cx={20} cy={80} r={16} cyAnimate={40} duration={4} /> 
        </div>
        <div class="absolute left-[13%] top-[54%] block md:hidden">
          <Ball w={36} h={200} cx={20} cy={40} r={10} cyAnimate={20} duration={4} /> 
        </div>
        <div class="absolute left-[15%] top-[54%] hidden md:block lg:hidden">
          <Ball w={36} h={200} cx={20} cy={80} r={16} cyAnimate={40} duration={4} /> 
        </div>
        <div class="absolute left-[15%] top-[54%] hidden lg:block xl:hidden">
          <Ball w={60} h={200} cx={20} cy={80} r={16} cyAnimate={40} duration={4} /> 
        </div>


        <div class="absolute left-[58%] top-[50%] block md:hidden">
          <Ball w={66} h={132} cx={33} cy={40} r={16} cyAnimate={20} duration={4.25} /> 
        </div>
        <div class="absolute left-[64%] top-[50%] hidden md:block lg:hidden">
          <Ball w={66} h={132} cx={33} cy={80} r={33} cyAnimate={40} duration={4.25} /> 
        </div>
        <div class="absolute left-[64%] top-[50%] hidden lg:block xl:hidden">
          <Ball w={66} h={132} cx={33} cy={80} r={33} cyAnimate={40} duration={4.25} /> 
        </div>
        <div class="absolute left-[64%] top-[50%] hidden xl:block">
          <Ball w={66} h={132} cx={33} cy={80} r={33} cyAnimate={40} duration={4.25} /> 
        </div>

        <div class="absolute left-[1%] block md:hidden">
          <Ball w={100} h={200} cx={50} cy={60} r={26} cyAnimate={40} duration={4.25} /> 
        </div>
        <div class="absolute left-[6%] hidden md:block lg:hidden">
          <Ball w={100} h={200} cx={50} cy={80} r={50} cyAnimate={50} duration={4.25} /> 
        </div>
        <div class="absolute left-[6%] hidden lg:block xl:hidden">
          <Ball w={100} h={200} cx={50} cy={80} r={50} cyAnimate={50} duration={4.25} /> 
        </div>
        <div class="absolute left-[6%] hidden xl:block">
          <Ball w={100} h={200} cx={50} cy={80} r={50} cyAnimate={50} duration={4.25} /> 
        </div> 
        </div>

        <div class="absolute md:w-full md:h-full ">
          <Image src={robotHand} priority alt="fondo" class="robotHand"/>
        </div>
      </div>
    </div>
    <div class={`ss:hidden ${styles.flexCenter}`}>
      <SolicitarTecnico />
    </div>
  </section>
)};

export default Hero;
