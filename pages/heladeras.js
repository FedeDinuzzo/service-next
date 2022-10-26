import Testimonials from '../components/Testimonials'
import Repair from '../components/Repair'
import WorkForm from '../components/WorkForm'
import CTA from '../components/CTA'
import heladeraHero from '../public/heladeraHero.webp'
import reparacionHeladeras from '../public/reparaciones-heladeras.webp'
import tecnicoHeladeras from '../public/tecnicoHeladeras.webp'
import step2 from '../public/step2.webp'
import Layout from '../components/Layout'

function heladeras() {
  return (
    <Layout 
      textOne="SERVICIO"
      textTwo="TÉCNICO"
      textThree="AUTORIZADO"
      titleOne="Service De" 
      titleTwo="De Heladeras" 
      titleThree="Electrolux" 
      img={heladeraHero}
    >
      <WorkForm repair={reparacionHeladeras} technical={tecnicoHeladeras} />
      <Repair gadget="heladera" step={step2}/>
      <Testimonials />
      <CTA />
    </Layout>  
  )
}

export default heladeras