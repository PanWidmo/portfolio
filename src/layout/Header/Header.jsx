import styles from '@/layout/Header/Header.module.scss';
import { useState, useEffect } from 'react';
export const Header = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuMobile = () => {
        if (isMobileScreen) setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const checkScreenResolution = () => {
            setIsMobileScreen(window.innerWidth < 600);
        };

        window.addEventListener('resize', checkScreenResolution);

        checkScreenResolution();

        return () => window.removeEventListener('resize', checkScreenResolution);
    }, [isMobileScreen]);

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <a href="/#home" className={styles.nav__title}>
                        TB
                    </a>
                    <button className={styles.nav__hamburger} onClick={toggleMenuMobile}>
                        <span className={styles.nav__bar}></span>
                    </button>
                    <ul className={styles.nav__menu}>
                        <li className={styles.nav__item}>
                            <a href="/#home" onClick={toggleMenuMobile}>
                                Home
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="/#about" onClick={toggleMenuMobile}>
                                About me
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="/#skills" onClick={toggleMenuMobile}>
                                Skills
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="/#projects" onClick={toggleMenuMobile}>
                                Projects
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="/#contact" onClick={toggleMenuMobile}>
                                Contact
                            </a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="/#contact" onClick={toggleMenuMobile}>
                                Hire Now
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
