// TODO: create new component that will hold text and a picture, picture should be able to be on either left or right.
'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./styles/textComponentStyle.module.css"

interface TextComponentProps {
    pictureOnRight: boolean
    containsLinkButton: boolean
    buttonText?: string
    buttonLink?: string
    headerText: string
    bodyText: string
    pictureLink: string
}

function NewLineText(text: string) {
    const newText = text.split('\n').map(str => <p>{str}<br/><br/></p>);
    return newText
}

export default function TextComponent(props: TextComponentProps) {
    const router = useRouter();
    return (
        props.pictureOnRight ?
            <div className={styles.textComponentContainer}>
                <div className={styles.textPartContainer}>
                    <div className={styles.textTitle}>{props.headerText}</div>
                    <div className={styles.textBody}>{NewLineText(props.bodyText)}</div>
                    {props.containsLinkButton ?
                        <div className={styles.textLinkContainer} onClick={() => router.push(props.buttonLink as string)}>
                            <div className={styles.textLinkContent}>{props.buttonText}</div>
                        </div> : null}
                </div>
                <img className={styles.textImage} src={props.pictureLink} />
            </div>
            :
            <div className={styles.textComponentContainer}>
                <img className={styles.textImageLeft} src={props.pictureLink} />
                <div className={styles.textPartContainer}>
                    <div className={styles.textTitle}>{props.headerText}</div>
                    <div className={styles.textBody}>{NewLineText(props.bodyText)}</div>
                    {props.containsLinkButton ?
                        <div className={styles.textLinkContainer} onClick={() => router.push(props.buttonLink as string)}>
                            <div className={styles.textLinkContent}>{props.buttonText}</div>
                        </div> : null}
                </div>
            </div>
    );
}