'use client'
import { usePathname, useRouter } from "next/navigation";
import styles from "./styles/navComponentStyle.module.css"
import Link from "next/link"

export default function Navigation() {
    const router = useRouter();

    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;
    return (
        <div className={styles.navContainer}>
                <div className={styles.navItemsContainer}>
                    <img style={{ width: 90, height: 90, cursor: "pointer" }} src="/images/HRF_logo.png" onClick={() => router.push("/")}/>
                    <Link href="/ohjelma" className={isActive("/ohjelma") ? styles.activeNavItem : styles.navItem}>Ohjelma</Link>
                    <Link href="/kilpailu" className={isActive("/kilpailu") ? styles.activeNavItem : styles.navItem}>Kilpailu</Link>
                    <Link href="/rata" className={isActive("/rata") ? styles.activeNavItem : styles.navItem}>Rata ja kartat</Link>
                    <Link href="/harrasteparkki" className={isActive("/harrasteparkki") ? styles.activeNavItem : styles.navItem}>Harrasteparkki</Link>
                    <Link href="/tuotteet" className={isActive("/tuotteet") ? styles.activeNavItem : styles.navItem}>HRF-tuotteet</Link>
                    <Link href="/kilpailijoille" className={isActive("/kilpailijoille") ? styles.activeNavItem : styles.navItem}>Kilpailijoille</Link>
                    <Link href="/medialle" className={isActive("/medialle") ? styles.activeNavItem : styles.navItem}>Medialle</Link>
                </div>
            <img style={{ width: 47, height: 30 }} src="/images/Flag_of_Sweden.svg.png" />
        </div>
    );
}