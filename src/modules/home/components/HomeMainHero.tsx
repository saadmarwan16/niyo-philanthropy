import { FunctionComponent, useEffect } from "react";
import Header from "../../../shared/components/Header";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import OverlappingGrid from "../../../shared/components/OverlappingGrid";
import { useCycle, Variant, Variants, motion } from "framer-motion";
import styles from '../../../../styles/Home.module.css';

interface HomeMainHeroProps {
  title: string;
  description: string;
}

const banners = [
  {
    image: "/images/image1.jpg",
    alt: "Image 1",
  },
  {
    image: "/images/image2.jpg",
    alt: "Image 2",
  },
  {
    image: "/images/image3.jpg",
    alt: "Image 3",
  },
  {
    image: "/images/image4.jpg",
    alt: "Image 4",
  },
];

const HomeMainHero: FunctionComponent<HomeMainHeroProps> = ({
  title,
  description,
}) => {
  return (
    // <section className="py-4 text-white bg-gradient-to-br from-[#358470] to-primary sm:py-6 md:py-8 home-section-horizontal-padding slanted-div selection:bg-secondary">
    //   <Header />

    //   <div className="flex flex-col items-center gap-16 mt-8 md:gap-32 sm:justify-between md:flex-row sm:mt-28 p">
    //     <div className="flex flex-col w-full gap-6 sm:gap-10 md:w-2/5">
    //       <div className="flex flex-col gap-4">
    //         <h1 className="heading1">{title}</h1>

    //         <p>{description}</p>
    //       </div>

    //       <Link href="#about-us">
    //         <a className="w-40 gap-2 custom-btn-secondary sm:w-64">
    //           Learn more
    //           <AiOutlineArrowRight className="text-lg font-semibold" />
    //         </a>
    //       </Link>
    //     </div>

    //     <OverlappingGrid
    //       image_path1="/images/image1.jpg"
    //       image_path2="/images/image2.jpg"
    //       image_path3="/images/image3.jpg"
    //     />
    //   </div>
    // </section>

    // <div>
    //   {banners.map((banner, index) => (
    //     <motion.div
    //       key={index}
    //       className={`hero-banner ${visibleImage === index ? 'block' : 'hidden'}`}
    //       variants={container}
    //       animate={visibleImage === index ? "show" : "hidden"}
    //     >
    //       <motion.img
    //         animate={imageAnimation}
    //         src={banner.image}
    //         alt={banner.alt}
    //       />
    //       <motion.div className="hero-banner-text" animate={textAnimation}>
    //         <h1 className="heading1">{title}</h1>
    //         <span></span>
    //         <p>{description}</p>
    //       </motion.div>
    //     </motion.div>
    //   ))}
    // </div>

    <div className={`${styles.bannerContainer} all-revert`}>
      <div className={`${styles.banner} ${styles.banner1}`}>
        <img className={styles.image} src="/images/image1.jpg" alt="Image 1" />
        <div className={`${styles.textBox} ${styles.textBox1}`}>
          <h1>Silence is not Enough</h1>
          <span></span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            repellat expedita accusamus, excepturi, mollitia recusandae
            praesentium quidem dolorum necessitatibus aliquam modi. Quas harum
            animi commodi magni corrupti quam doloribus nesciunt.
          </p>
        </div>
      </div>
      {/* <div className={`${styles.banner} ${styles.banner2}`}>
        <img className={styles.image} src="/images/image2.jpg" alt="Image 2" />
        <div className={`${styles.textBox} ${styles.textBox2}`}>
          <h1>Future of Next Generation</h1>
          <span></span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            repellat expedita accusamus, excepturi, mollitia recusandae
            praesentium quidem dolorum necessitatibus aliquam modi. Quas harum
            animi commodi magni corrupti quam doloribus nesciunt.
          </p>
        </div>
      </div>
      <div className={`${styles.banner} ${styles.banner3}`}>
        <img className={styles.image} src="/images/image3.jpg" alt="Image 3" />
        <div className={`${styles.textBox} ${styles.textBox3}`}>
          <h1>Know your passion</h1>
          <span></span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            repellat expedita accusamus, excepturi, mollitia recusandae
            praesentium quidem dolorum necessitatibus aliquam modi. Quas harum
            animi commodi magni corrupti quam doloribus nesciunt.
          </p>
        </div>
      </div>
      <div className={`${styles.banner} ${styles.banner4}`}>
        <img className={styles.image} src="/images/image4.jpg" alt="Image 4" />
        <div className={`${styles.textBox} ${styles.textBox4}`}>
          <h1>Keep your Dreams Alive</h1>
          <span></span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            repellat expedita accusamus, excepturi, mollitia recusandae
            praesentium quidem dolorum necessitatibus aliquam modi. Quas harum
            animi commodi magni corrupti quam doloribus nesciunt.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default HomeMainHero;
