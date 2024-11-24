import styles from "./styles/footerStyle.module.css"

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <p>© 2024 Your Company. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </footer>
    );
}