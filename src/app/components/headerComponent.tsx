import styles from "./styles/headerStyle.module.css"
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.header}>
          <Image src="/images/HRF_banner_left.png" alt="Header image" width={0} height={0} sizes="100vw" className={styles.leftImage}></Image>
          <Image src="/images/HRF_banner_right.png" alt="Header image" width={0} height={0} sizes="100vw" className={styles.rightImage}></Image>
        </div>
    );
}