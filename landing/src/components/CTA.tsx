import styles from "../style";
import Button from "./Button";
import { motion } from "framer-motion";


const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-once="true">
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's check it out now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Elevate your gains within a supportive community.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href="https://proximafitness.com/"><Button /></a>
    </div>
  </section>
);

export default CTA;
