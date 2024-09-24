import { visualOne } from "../../assets";
import styles, { layout } from "../../style";

const FirstVisual = () => (
  <section
    id="first-visual"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-once="true"
    className={` ${layout.section}`}
    >
    <div className={layout.sectionInfoReverse} style={ {
        // height: "500px",
        backgroundImage: `url(${visualOne})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        borderRadius: "30px",
        } }
    >
      <h2 className={ `${styles.heading2End} ss:pr-44 ss:pt-32 italic white-gradient` }>
      "We take on the strength
      <br className="sm:block hidden" /> of that which we overcome."
      </h2>
    </div>
  </section>
);

export default FirstVisual;
