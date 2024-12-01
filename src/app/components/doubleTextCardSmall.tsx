import styles from "./styles/textCardStyle.module.css"

interface TextCardProps {
    boxHeaderText?: string
    boxBodyText: string
    secondBoxHeaderText?: string
    secondBoxBodyText: string
    firstBoxButtonText?: string
    firstBoxHasButton?: boolean
    secondBoxButtonText?: string
    secondBoxHasButton?: boolean
}


type BoxProps = {
    position: 'left' | 'right';
    children: React.ReactNode;
    hasButton: boolean
};

const PositionedBox = ({ position, children, hasButton}: BoxProps) => {
    return (
        <div className={`${styles.positionedBox} ${styles[position]} ${hasButton ? styles.differentColor : styles.positionedBox}` }>
            {children}
        </div>
    );
};

// Usage Example
export default function DoubleTextCard(props: TextCardProps) {
    return (
            <div className={styles.container}>
                <PositionedBox position={'left'} hasButton={props.firstBoxHasButton || false}>
                    <h2>{props.boxHeaderText}</h2>
                    <p>{props.boxBodyText}</p>
                    {props.firstBoxHasButton ? <div className={styles.cardLink}>
                        <div className={styles.cardLinkText}>{props.firstBoxButtonText}</div>
                    </div> : null}
                </PositionedBox>
                <PositionedBox position={'right'} hasButton={props.secondBoxHasButton || false}>
                    <h2>{props.secondBoxHeaderText}</h2>
                    <p>{props.secondBoxBodyText}</p>
                    {props.secondBoxHasButton ? <div className={styles.cardLink}>
                        <div className={styles.cardLinkText}>{props.secondBoxButtonText}</div>
                    </div> : null}
                </PositionedBox>
            </div>
    );
}