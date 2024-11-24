import styles from "./styles/navComponentStyle.module.css"
import Link from "next/link"

export default function Navigation() {
    return (
        <div className={styles.navContainer}>
                <div className={styles.navItemsContainer}>
                    <img style={{ width: 90, height: 90 }} src="https://via.placeholder.com/90x90" />
                    <Link href="/" className={styles.navItem}>Ohjelma</Link>
                    <Link href="/kilpailu" className={styles.navItem}>Kilpailu</Link>
                    <Link href="/rata" className={styles.navItem}>Rata ja kartat</Link>
                    <Link href="/harrasteparkki" className={styles.navItem}>Harrasteparkki</Link>
                    <Link href="/tuotteet" className={styles.navItem}>HRF-tuotteet</Link>
                    <Link href="/kilpailijoille" className={styles.navItem}>Kilpailijoille</Link>
                    <Link href="/medialle" className={styles.navItem}>Medialle</Link>
                </div>
            <img style={{ width: 47, height: 30 }} src="https://via.placeholder.com/47x30" />
        </div>
    );
}