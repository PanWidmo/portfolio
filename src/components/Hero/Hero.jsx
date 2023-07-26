import styles from '@/components/Hero/Hero.module.scss';
import { FiCornerRightDown } from 'react-icons/fi';

export const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.hero__left}>
                <h1> Tomasz Baran </h1>
                <h2> Front-end Developer </h2>

                <a href="/#about" className={styles.hero__button}>
                    Read more <FiCornerRightDown />
                </a>
            </div>
            <div className={styles.hero__right}>
                <img src="./img/ms.jpg" alt="Astronaut" className={styles.hero__img} />
            </div>
        </section>
    );
};
