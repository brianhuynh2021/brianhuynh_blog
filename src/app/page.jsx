import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png"

export default function Home() {
  return (
    <div>
      <div className={styles.texts}>Better design for digital products.</div>
      <p>Turning your Idea into Reality. We bring together the teams from global tech industry.</p>
      <div className={styles.imageContainer}></div>
      <button>See Our Works</button>
      <Image src={Hero} alt="home page" className={styles.img}/>
    </div>
  )
}
 