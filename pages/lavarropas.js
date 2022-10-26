import Testimonials from '../components/Testimonials';
import Repair from '../components/Repair';
import WorkForm from '../components/WorkForm';
import CTA from '../components/CTA';
import lavarropasHero from '../public/lavarropasHero.webp'
import reparacionLavarropas from '../public/reparaciones-lavarropas.webp'
import tecnicoLavarropas from '../public/tecnicoHeladeras.webp'
import step2v from '../public/step2v.webp'
import Layout from '../components/Layout';

function lavarropas() {
  return (
    <Layout 
      textOne="SERVICIO"
      textTwo="TÉCNICO"
      textThree="AUTORIZADO"
      titleOne="Service De" 
      titleTwo="Lavarropas" 
      titleThree="Electrolux" 
      img={lavarropasHero}
    >
      <WorkForm repair={reparacionLavarropas} technical={tecnicoLavarropas} />
      <Repair gadget="lavarropas" step={step2v}/>
      <Testimonials />
      <CTA />
    </Layout>
  )
}

export default lavarropas