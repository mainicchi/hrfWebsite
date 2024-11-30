import styles from "./styles/textCardStyle.module.css"

interface TextCardProps {
    bodyText: string
    headerText: string
    boxHeaderText: string
    boxBodyText: string
    boxPosition: 'left' | 'right'
    buttonText?: string
    hasButton?: boolean
}


type BoxProps = {
    position: 'left' | 'right';
    children: React.ReactNode;
};

const PositionedBox = ({ position, children }: BoxProps) => {
    return (
        <div className={`${styles.positionedBox} ${styles[position]}`}>
            {children}
        </div>
    );
};

// Usage Example
export default function TextCardSmall(props: TextCardProps) {
    return (
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <h2 style={{ marginBottom: '25px' }}>{props.headerText}</h2>
                    <p>
                        {props.bodyText}
                    </p>
                </div>
                <PositionedBox position={props.boxPosition}>
                    <p>{props.boxBodyText}</p>
                    {props.hasButton ? <div className={styles.cardLink}>
                        <div className={styles.cardLinkText}>{props.buttonText}</div>
                    </div> : null}
                </PositionedBox>
            </div>
    );
}