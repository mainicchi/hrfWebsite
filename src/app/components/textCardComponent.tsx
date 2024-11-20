import styles from "./styles/textCardStyle.module.css"

export default function TextCardComponent() {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>Fiat Historic Ratapotti
            </div>
            <div className={styles.cardBody}>Fiat Historic Ratapotti -sarja ajaa muiden ykkösryhmäläisten joukossa. Sen kalusto koostuu huokeasti ylläpidettävistä Fiat 127:sta (ryhmä 1), jotka ovat vuosimalliltaan 1971–81 (Mk1 ja Mk2). Moottorina näissä on 903 cc, jota ei saa virittää. Autot ovat luokitustodistuksen 5415:n sekä sallituiden muutoksien mukaisia.</div>
            <div className={styles.cardLink}>
                <div className={styles.cardLinkText}>Lisätietoja</div>
            </div>
        </div>
    );
}