import styles from '@/components/Projects/Projects.module.scss';
import { Slider } from '@/components/Slider/Slider.jsx';

export const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <h2>Projects</h2>
            <Slider />
            <a href="https://github.com/tomaszbaranww" target="_blank" rel="noreferrer" className={styles.projects__button}>
                See more projects
            </a>
        </section>
    );
};
