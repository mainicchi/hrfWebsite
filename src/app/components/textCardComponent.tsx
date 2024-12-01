'use client'
import styles from "./styles/textCardStyle.module.css"
import {useRouter} from "next/navigation";

interface TextCardComponentProps {
    containsLinkButton: boolean
    buttonText?: string
    headerText: string
    bodyText: string
    buttonLinkDestination?: string
}

function NewLineText(text: string) {
    const newText = text.split('\n').map(str => <p>{str}<br/><br/></p>);
    return newText
}

export default function TextCardComponent(props: TextCardComponentProps) {
    const router = useRouter();
    return (
        props.containsLinkButton ?
        <div className={styles.card}>
            <div className={styles.cardHeader}>{props.headerText}
            </div>
            <div className={styles.cardBody}>{NewLineText(props.bodyText)}</div>
            <div className={styles.cardLink} onClick={() => router.push(props.buttonLinkDestination as string)}>
                <div className={styles.cardLinkText}>{props.buttonText}</div>
            </div>
        </div>
        :
        <div className={styles.card}>
        <div className={styles.cardHeader}>{props.headerText}
        </div>
        <div className={styles.cardBody}>{NewLineText(props.bodyText)}</div>
    </div>
    );
}