// TODO: create new component that will hold text and a picture, picture should be able to be on either left or right.
import Image from "next/image";
import styles from "../page.module.css";

export default function TextComponent() {
    return ( 
        <div>
            <div>
                <p>
                    "Test"
                </p>
            </div>
        <Image
            className={styles.logo}
            src="/next.svg"
            alt=""
            width={180}
            height={38}
            priority
            />
        </div>
    );
}