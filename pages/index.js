import styles from "../constants/style"
import Stats from "../components/Stats"
import heladeraLavarropas from '../public/heladera-lavarropas.webp'
import Layout from '../components/Layout'
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Features = dynamic(() => import('../components/Features'), {
  suspense: true,
});

const Heladeras = dynamic(() => import('../components/Heladeras'), {
  suspense: true,
});

const Lavarropas = dynamic(() => import('../components/Lavarropas'), {
  suspense: true,
});

const Zones = dynamic(() => import('../components/Zones'), {
  suspense: true,
});

const CTA = dynamic(() => import('../components/CTA'), {
  suspense: true,
});

function Home() {
  return (
    <>
    <Layout 
      textOne="SERVICIO" 
      textTwo="TÉCNICO" 
      textThree="AUTORIZADO" 
      titleOne="Service" 
      titleTwo="Electrolux" 
      titleThree="Especializado" 
      img={heladeraLavarropas}
    >
      <div className={`${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>
      <Suspense fallback={`Loading...`}>
        <Features />
        <Heladeras />
        <Lavarropas />
        <Zones />
        <CTA />
      </Suspense>
    </Layout>
    </>
  );
};

export default Home;
