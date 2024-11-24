// TODO: create new component that will hold text and a picture, picture should be able to be on either left or right.
import Image from "next/image";
import styles from "./styles/textComponentStyle.module.css"

interface TextComponentProps {
    pictureOnRight: boolean
    containsLinkButton: boolean
    buttonText?: string
}

export default function TextComponent(props: TextComponentProps) {
    return (
        props.pictureOnRight ?
            <div className={styles.textComponentContainer}>
                <div className={styles.textPartContainer}>
                    <div className={styles.textTitle}>Otsikko</div>
                    <div className={styles.textBody}>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.<br /><br />Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.<br /><br />Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</div>
                    {props.containsLinkButton ?
                        <div className={styles.textLinkContainer}>
                            <div className={styles.textLinkContent}>{props.buttonText}</div>
                        </div> : null}
                </div>
                <img className={styles.textImage} src="https://via.placeholder.com/667x629" />
            </div>
            :
            <div className={styles.textComponentContainer}>
                <img className={styles.textImageLeft} src="https://via.placeholder.com/667x629" />
                <div className={styles.textPartContainer}>
                    <div className={styles.textTitle}>Otsikko</div>
                    <div className={styles.textBody}>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.<br /><br />Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.<br /><br />Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</div>
                    {props.containsLinkButton ?
                        <div className={styles.textLinkContainer}>
                            <div className={styles.textLinkContent}>{props.buttonText}</div>
                        </div> : null}
                </div>
            </div>
    );
}