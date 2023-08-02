import styles from '@/components/Slides/Slide.module.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { TbWorldShare } from 'react-icons/tb';

export const EliteBank = () => {
    return (
        <div className={styles.slide}>
            <div className={styles.slide__content}>
                <h3 className={styles.slide__title}>Elite Bank</h3>
                <div className={styles.slide__wrapper}>
                    <a href="https://react.dev/" target="_blank" rel="noreferrer">
                        React
                    </a>
                    <a href="https://firebase.google.com/docs/auth" target="_blank" rel="noreferrer">
                        Firebase Authentication
                    </a>
                    <a href="https://firebase.google.com/docs/database" target="_blank" rel="noreferrer">
                        Firebase Realtime Database
                    </a>

                    <a href="https://github.com/morellodev/react-awesome-reveal" target="_blank" rel="noreferrer">
                        React Awesome Reveal
                    </a>
                    <a href="https://react-hook-form.com/" target="_blank" rel="noreferrer">
                        React Hook Form
                    </a>
                    <a href="https://www.w3schools.com/react/react_sass_styling.asp" target="_blank" rel="noreferrer">
                        SASS Module
                    </a>
                </div>
                <p className={styles.slide__description}>
                    Project with Firebase Authentication and connection to Firebase Realtime Database that allows users to manipulate their money.
                </p>
                <div className={styles.slide__buttons}>
                    <a href="https://tomaszbaranww.github.io/elite-bank/" target="_blank" rel="noreferrer" className={styles.slide__button}>
                        <TbWorldShare /> Live
                    </a>
                    <a href="https://github.com/tomaszbaranww/elite-bank" target="_blank" rel="noreferrer" className={styles.slide__button}>
                        <AiOutlineGithub /> GitHub
                    </a>
                </div>
            </div>
            <img className={styles.slide__img} src="./screenshots/elite-bank.png" alt="Elite Bank project screenshot" />
        </div>
    );
};
