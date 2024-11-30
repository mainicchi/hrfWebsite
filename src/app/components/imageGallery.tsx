import styles from "./styles/imageGallery.module.css"
import Image from "next/image";

export default function ImageGallery() {
    return (
        <div className={styles.container}>
          <Image src="/images/galleria_1.jpg" alt="Header image" width={0} height={0} sizes="100vw" className={styles.image}></Image>
          <Image src="/images/galleria_2.jpg" alt="Header image" width={0} height={0} sizes="100vw" className={styles.image}></Image>
          <ul className={styles.linkList}>
            <li className={styles.link}>Pasin kuvia</li>
            <li className={styles.link}>Kari Ketosen kuvia (lauantai)</li>
            <li className={styles.link}>Kari Ketosen kuvia (sunnuntai)</li>
            <li className={styles.link}>PeepeT kuvia</li>
            <li className={styles.link}>Arto Vuorisen varikkokuvia</li>
            <li className={styles.link}>Arto Vuorisen kisakuvia</li>
            <li className={styles.link}>Tyyliniekan kuvia</li>
            <li className={styles.link}>Helga Sorrin kuvia</li>
            <li className={styles.link}>Jussi Mikkosen kuvia</li>
            <li className={styles.link}>Pauli Pirskasen kuvia</li>
          </ul>
        </div>
    );
}