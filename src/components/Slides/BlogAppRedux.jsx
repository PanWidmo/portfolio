import styles from '@/components/Slides/Slide.module.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { TbWorldShare } from 'react-icons/tb';
export const BlogAppRedux = () => {
    return (
        <div className={styles.slide}>
            <div className={styles.slide__content}>
                <h3 className={styles.slide__title}>Blog app redux </h3>
                <div className={styles.slide__wrapper}>
                    <a href="https://react.dev/" target="_blank" rel="noreferrer">
                        React
                    </a>
                    <a href="https://redux-toolkit.js.org/" target="_blank" rel="noreferrer">
                        Redux Toolkit
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
                <p className={styles.slide__description}>Blog page with options to create, edit, delete and display posts.</p>
                <div className={styles.slide__buttons}>
                    <a href="https://panwidmo.github.io/blog-app-redux/" target="_blank" rel="noreferrer" className={styles.slide__button}>
                        <TbWorldShare /> Live
                    </a>
                    <a href="https://github.com/PanWidmo/blog-app-redux" target="_blank" rel="noreferrer" className={styles.slide__button}>
                        <AiOutlineGithub /> GitHub
                    </a>
                </div>
            </div>
            <img className={styles.slide__img} src="./screenshots/blog-app-redux.png" alt="Blog app redux project screenshot" />
        </div>
    );
};
