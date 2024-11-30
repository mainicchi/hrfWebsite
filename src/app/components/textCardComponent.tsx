import styles from "./styles/textCardStyle.module.css"

interface TextCardComponentProps {
    containsLinkButton: boolean
    buttonText?: string
    headerText: string
    bodyText: string
}

export default function TextCardComponent(props: TextCardComponentProps) {
    return (
        props.containsLinkButton ?
        <div className={styles.card}>
            <div className={styles.cardHeader}>{props.headerText}
            </div>
            <div className={styles.cardBody}>{props.bodyText}</div>
            <div className={styles.cardLink}>
                <div className={styles.cardLinkText}>{props.buttonText}</div>
            </div>
        </div>
        :
        <div className={styles.card}>
        <div className={styles.cardHeader}>{props.headerText}
        </div>
        <div className={styles.cardBody}>{props.bodyText}</div>
    </div>
    );
}