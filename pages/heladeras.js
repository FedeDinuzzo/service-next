import React from 'react';
import Testimonials from '../components/Testimonials';
import Hero from '../components/Hero';
import Repair from '../components/Repair';
import WorkForm from '../components/WorkForm';
import CTA from '../components/CTA';
import styles from '../constants/style';
import { heladeraHero, reparacionHeladeras, step2, tecnicoHeladeras } from '../../assets';

function heladeras() {
  return (
    <div className='appear'>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero 
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service" 
            titleTwo="De Heladeras" 
            titleThree="Electrolux" 
            img={heladeraHero}
          />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <WorkForm repair={reparacionHeladeras} technical={tecnicoHeladeras} />
          <Repair gadget="heladera" step={step2}/>
          <Testimonials/>
          <CTA />
        </div>
      </div>
    </div>
  )
}

export default heladeras