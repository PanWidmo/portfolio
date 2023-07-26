import styles from '@/components/slides/Slide.module.scss';
export const PizzaPage = () => {
    return (
        <div className={styles.slide}>
            <div className={styles.slide__content}>
                <h3 className={styles.slide__title}>Pizza page </h3>
                <div className={styles.slide__wrapper}></div>
                <p className={styles.slide__description}>In progress...</p>
            </div>
        </div>
    );
};
