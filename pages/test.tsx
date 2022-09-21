import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

interface TestPageProps {}

const Test: NextPage<TestPageProps> = ({}) => {
  return (
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
  );
};

export default Test;
