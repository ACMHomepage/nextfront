import Image from 'next/image';
import Button from 'src/commons/components/Button';

// TODO: Try to use webp, but failed to build (`yarn build`).
// source file: ACMHomepage.kra, created by open source software `Krita`.
import acmHomepage from './asserts/ACMHomepage.min.png';
import styles from './WelcomeBar.module.scss';

const WelcomeBar = () => {
  return (
    <div className={styles.barWrapper}>
      <div className={styles.bar}>
        <div className={styles.info}>
          <div className={styles.fillerBegin} />
          <div className={styles.title}>
            <div className={styles.bigTitle}>ACM</div>
            <div className={styles.littleTitle}>Homepage</div>
          </div>
          <div className={styles.helper}>
            Try to be the best homepage for ACMer.
          </div>
          <div className={styles.buttonRow}>
            <Button variant="filled" className={styles.button}>
              Sign up
            </Button>
            <Button variant="outline" className={styles.button}>
              More infomation
            </Button>
          </div>
          <div className={styles.fillerEnd} />
        </div>
        <div className={styles.acmHomepageImage}>
          <Image
            src={acmHomepage}
          />
        </div>
      </div>
    </div>
  );
}

export default WelcomeBar;