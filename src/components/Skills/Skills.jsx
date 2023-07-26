import styles from '@/components/Skills/Skills.module.scss';

const skillList = ['ReactJs', 'JavaScript', 'HTML', 'CSS', 'SAAS', 'GIT', 'FIGMA', 'RWD'];

export const Skills = () => {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.skills__left}>
                <h2> Skills </h2>
                <ul className={styles.skills__list}>
                    {skillList.map((item) => (
                        <li className={`${styles.skills__item} ${styles[`skills__item${item}`]}`} key={item} tabIndex="0">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
