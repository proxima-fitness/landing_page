
import styles from "../../style";
import { Button } from "../generic/Button";
import { motion } from "framer-motion";
import GetStarted from "../header/GetStarted";


const CTA = () => (
  <section id="cta" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  data-aos="fade-up" data-aos-anchor-placement="top-top" data-aos-once="true">
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Download the App now</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      It will take less than a minute
      </p>
    </div>
    <div>
        <GetStarted />
    </div>

  </section>
);

export default CTA;

