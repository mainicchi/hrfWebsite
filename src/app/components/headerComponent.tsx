import styles from "./styles/headerStyle.module.css"
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.header}>
          <Image src="/images/HRF_2024_ylapalkki.png" alt="Header image" width={0} height={0} sizes="100vw" style={{width: '100%', height: '100%', objectFit: 'fill'}}></Image>
        </div>
    );
}