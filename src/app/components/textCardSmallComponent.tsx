import styles from "./styles/textCardStyle.module.css"

interface TextCardSmallprops {
    
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
  export default function TextCardSmall() {
    return (
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h2>Kilpailijalista</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <PositionedBox position="right">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </PositionedBox>
      </div>
    );
  }