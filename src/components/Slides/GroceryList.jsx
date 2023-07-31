import styles from '@/components/Slides/Slide.module.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { TbWorldShare } from 'react-icons/tb';
export const GroceryList = () => {
    return (
        <div className={styles.slide}>
            <div className={styles.slide__content}>
                <h3 className={styles.slide__title}>Grocery list </h3>
                <div className={styles.slide__wrapper}>
                    <a href="https://react.dev/" target="_blank" rel="noreferrer">
                        React
                    </a>
                    <a href="https://developer.mozilla.org/pl/docs/Web/API/Window/localStorage" target="_blank" rel="noreferrer">
                        Local Storage
                    </a>
                    <a href="https://www.w3schools.com/react/react_sass_styling.asp" target="_blank" rel="noreferrer">
                        SASS Module
                    </a>
                </div>
                <p className={styles.slide__description}>Grocery list page- useful to keep track of what to buy. Includes search functionality.</p>
                <div className={styles.slide__buttons}>
                    <a href="https://tomaszbaranww.github.io/grocery-list/" target="_blank" rel="noreferrer" className={styles.slide__button}>
                        <TbWorldShare /> Live
                    </a>
                    <a href="https://github.com/tomaszbaranww/grocery-list" target="_blank" rel="noreferrer" className={styles.slide__button}>
                        <AiOutlineGithub /> GitHub
                    </a>
                </div>
            </div>
            <img className={styles.slide__img} src="./screenshots/grocery-list.png" alt="Grocery List project screenshot" />
        </div>
    );
};
