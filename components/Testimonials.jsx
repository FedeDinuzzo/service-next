import { feedback } from "../constants/index"
import styles from "../styles/style"
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section id="clients" className={`${styles.flexCenter} flex-col relative lg:mb-40`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>Experiencias de
      <br className="sm:block hidden" />Nuestros Clientes</h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Calidad De Servicio No Es Lo Que Nosotros Damos, Es Lo Que Reciben Nuestros Clientes.</p>
      </div>
    </div>

    <div className="flex flex-wrap md:flex-nowrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
    <div className="absolute z-[0] w-[60%] h-[120%] -right-[50%] mt-[30%] rounded-full blue__gradient" />
  </section>
);

export default Testimonials;