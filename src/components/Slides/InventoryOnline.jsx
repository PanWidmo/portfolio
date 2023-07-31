import styles from '@/components/Slides/Slide.module.scss';
import { AiOutlineGithub } from 'react-icons/ai';

export const InventoryOnline = () => {
    return (
        <div className={styles.slide}>
            <div className={styles.slide__content}>
                <h3 className={styles.slide__title}>Inwentaryzacja Online</h3>
                <div className={styles.slide__wrapper}>
                    <a href="https://react.dev/" target="_blank" rel="noreferrer">
                        React
                    </a>
                    <a href="https://formik.org/" target="_blank" rel="noreferrer">
                        Formik
                    </a>
                    <a href="https://www.styled-components.com/" target="_blank" rel="noreferrer">
                        Styled Components
                    </a>
                    <a href="https://axios-http.com/" target="_blank" rel="noreferrer">
                        Axios
                    </a>
                    <a href="https://developer.mozilla.org/pl/docs/Web/API/Window/localStorage" target="_blank" rel="noreferrer">
                        Local Storage
                    </a>
                    <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
                        React Router
                    </a>
                    <a href="https://www.cypress.io/" target="_blank" rel="noreferrer">
                        Cypress
                    </a>
                </div>
                <p className={styles.slide__description}>
                    Project made for engineering thesis. It helps companies with making an inventory. More screenshots on GitHub.
                </p>
                <div className={styles.slide__buttons}>
                    <a
                        href="https://github.com/tomaszbaranww/inwentaryzacja-online"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.slide__button}
                    >
                        <AiOutlineGithub /> GitHub
                    </a>
                </div>
            </div>
            <img className={styles.slide__img} src="./screenshots/inventory-online.png" alt="Inventory online project screenshot" />
        </div>
    );
};
