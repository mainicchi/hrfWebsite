import styles from "./styles/footerStyle.module.css"
import Link from "next/link"

export default function Footer() {
    return (
<footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <h1 className={styles.footerTitle}>Historic Race Finland ry</h1>
        <div className={styles.footerSocial}>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.footerFacebook}>
            <span className="facebook-icon">F</span> {/* Placeholder for Facebook */}
          </Link>
        </div>
        <p className={styles.footerCopyright}>
          Oikeudet muutoksiin pidätetään. Viimeisin päivitys 00.00.0000 - email@email.com
          <br />
          © Person Person / Historic Race Finland ry. All Rights Reserved.
        </p>
      </div>
      <div style={{width: '30%'}}/>
      <div className={styles.footerRight}>
        <ul className={styles.footerLinks}>
          <li><Link href="/">Ohjelma</Link></li>
          <li><Link href="/kilpailu">Kilpailu</Link></li>
          <li><Link href="/rata">Rata ja kartat</Link></li>
          <li><Link href="/harrasteparkki">Harrasteparkki</Link></li>
          <li><Link href="/tuotteet">HRF-tuotteet</Link></li>
          <li><Link href="/kilpailijoille">Kilpailijoille</Link></li>
          <li><Link href="/medialle">Medialle</Link></li>
        </ul>
      </div>
    </footer>
    );
}