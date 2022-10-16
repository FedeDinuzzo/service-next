import Head from 'next/head'
import styles from "../constants/style"
import Hero from "../components/Hero"
import Stats from "../components/stats"
import Features from '../components/Features'
import Heladeras from '../components/Heladeras'
import Lavarropas from '../components/Lavarropas'
import Zones from '../components/Zones'
import CTA from '../components/CTA'

function Home() {
  return (
    <div className='appear' >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} md:h-[100vh]`}>
        <Hero 
          textOne="SERVICIO" 
          textTwo="TÉCNICO" 
          textThree="AUTORIZADO" 
          titleOne="Service" 
          titleTwo="Electrolux" 
          titleThree="Especializado" 
          //img={heladeraLavarropas}
          />
          <Stats />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Features />
          <Heladeras />
          <Lavarropas />
          <Zones />
          <CTA />
      </div>
    </div>
  </div>
  );
};

export default Home;
