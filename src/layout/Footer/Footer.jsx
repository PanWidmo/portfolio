import styles from '@/layout/Footer/Footer.module.scss';

export const Footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <p>Tomasz Baran, Copyright &copy; {currYear}</p>
            </div>
        </footer>
    );
};
