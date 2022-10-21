import Testimonials from '../components/Testimonials';
import Navbar from "../components/Navbar"
import Hero from '../components/Hero';
import Footer from '../components/Footer'
import Repair from '../components/Repair';
import WorkForm from '../components/WorkForm';
import styles from '../constants/style';
import CTA from '../components/CTA';
import lavarropasHero from '../public/lavarropasHero.webp'
import reparacionLavarropas from '../public/reparaciones-lavarropas.webp'
import tecnicoLavarropas from '../public/tecnicoHeladeras.webp'
import step2v from '../public/step2v.webp'
import Head from 'next/head'

function lavarropas() {
  return (
    <div className='appear bg-primary'>
    <Head>
      <link rel='preconnect' href='https://fonts.googleapis.com'/>
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap'/>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero 
            textOne="SERVICIO"
            textTwo="TÉCNICO"
            textThree="AUTORIZADO"
            titleOne="Service De" 
            titleTwo="Lavarropas" 
            titleThree="Electrolux" 
            img={lavarropasHero}
          />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <WorkForm repair={reparacionLavarropas} technical={tecnicoLavarropas} />
          <Repair gadget="lavarropas" step={step2v}/>
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default lavarropas