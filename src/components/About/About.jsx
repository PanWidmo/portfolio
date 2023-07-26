import styles from '@/components/About/About.module.scss';
import { Map } from '@/components/Map/Map.jsx';
export const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.about__left}>
                <div className={styles.about__description}>
                    <h2>About me</h2>
                    <h3 className={styles.about__tagline}>Hi there! 👋</h3>
                    <p>
                        As a highly motivated and versatile individual, I am passionate about embracing challenges and constantly striving for
                        personal and professional growth. With a strong background in web programming, I am eager to contribute my skills and
                        knowledge to a dynamic and innovative team.
                    </p>
                    <p>
                        I am a proactive problem solver with a keen eye for detail, always seeking creative and effective solutions to complex tasks.
                        My experience working collaboratively in diverse environments has allowed me to achieve excellent communication and teamwork
                        skills.
                    </p>
                    <p>
                        My commitment to lifelong learning drives me to stay up-to-date with the latest industry trends and best practices, enabling
                        me to adapt and excel in rapidly changing circumstances. I am adept at time management and thrive under pressure, ensuring
                        timely and successful project completion.
                    </p>

                    <p>I believe my passion for continuous improvement and dedication to excellence make me a valuable asset to any team.</p>
                </div>
            </div>
            <div className={styles.about__right}>
                <Map />
            </div>
        </section>
    );
};
