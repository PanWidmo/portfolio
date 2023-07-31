import styles from '@/components/Slides/Slide.module.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { TbWorldShare } from 'react-icons/tb';

export const BlogApp = () => {
    return (
        <div className={styles.slide}>
            <div className={styles.slide__content}>
                <h3 className={styles.slide__title}>Blog app</h3>
                <div className={styles.slide__wrapper}>
                    <a href="https://react.dev/" target="_blank" rel="noreferrer">
                        React
                    </a>
                    <a href="https://legacy.reactjs.org/docs/context.html" target="_blank" rel="noreferrer">
                        Context API
                    </a>
                    <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
                        React Router
                    </a>
                    <a href="https://date-fns.org/" target="_blank" rel="noreferrer">
                        date-fns
                    </a>
                    <a href="https://axios-http.com/" target="_blank" rel="noreferrer">
                        Axios
                    </a>
                    <a href="https://www.w3schools.com/react/react_sass_styling.asp" target="_blank" rel="noreferrer">
                        SASS Module
                    </a>
                </div>
                <p className={styles.slide__description}>Page to display, create, edit and delete posts with search functionality.</p>
                <div className={styles.slide__buttons}>
                    <a href="https://tomaszbaranww.github.io/blog-app/" target="_blank" rel="noreferrer" className={styles.slide__button}>
                        <TbWorldShare /> Live
                    </a>
                    <a href="https://github.com/tomaszbaranww/blog-app" target="_blank" rel="noreferrer" className={styles.slide__button}>
                        <AiOutlineGithub /> GitHub
                    </a>
                </div>
            </div>
            <img className={styles.slide__img} src="./screenshots/blog-app.png" alt="Blog app redux project screenshot" />
        </div>
    );
};
