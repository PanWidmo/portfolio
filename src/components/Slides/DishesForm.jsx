import styles from '@/components/Slides/Slide.module.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { TbWorldShare } from 'react-icons/tb';
export const DishesForm = () => {
    return (
        <div className={styles.slide}>
            <div className={styles.slide__content}>
                <h3 className={styles.slide__title}>Dishes form </h3>
                <div className={styles.slide__wrapper}>
                    <a href="https://react.dev/" target="_blank" rel="noreferrer">
                        React
                    </a>
                    <a href="https://redux-toolkit.js.org/" target="_blank" rel="noreferrer">
                        Redux Toolkit
                    </a>
                    <a href="https://react-hook-form.com/" target="_blank" rel="noreferrer">
                        React Hook Form
                    </a>
                    <a href="https://github.com/jquense/yup" target="_blank" rel="noreferrer">
                        Yup
                    </a>
                    <a href="https://axios-http.com/" target="_blank" rel="noreferrer">
                        Axios
                    </a>
                    <a href="https://www.w3schools.com/react/react_sass_styling.asp" target="_blank" rel="noreferrer">
                        SASS Module
                    </a>
                </div>
                <p className={styles.slide__description}>Simple form to create new dish with validation and conditional fields.</p>
                <div className={styles.slide__buttons}>
                    <a href="https://panwidmo.github.io/dishes-form/" target="_blank" rel="noreferrer" className={styles.slide__button}>
                        <TbWorldShare /> Live
                    </a>
                    <a href="https://github.com/PanWidmo/dishes-form" target="_blank" rel="noreferrer" className={styles.slide__button}>
                        <AiOutlineGithub /> GitHub
                    </a>
                </div>
            </div>
            <img className={styles.slide__img} src="./screenshots/dishes-form.png" alt="Dishes form project screenshot" />
        </div>
    );
};
