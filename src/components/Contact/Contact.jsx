import { useState, useRef } from 'react';
import styles from '@/components/Contact/Contact.module.scss';
import { AiOutlineFileText, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BiErrorAlt } from 'react-icons/bi';
import { VscPass } from 'react-icons/vsc';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const [infoMsg, setInfoMsg] = useState('');
    const form = useRef();

    const serviceId = 'service_v2nfyya';
    const templateId = 'template_xchrset';
    const publicKey = '-XiKW4HuaTWYFPb7X';

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
            () => {
                setInfoMsg(() => (
                    <>
                        <VscPass /> Thank you for contacting me, I will be in touch shortly :)
                    </>
                ));
            },
            (error) => {
                console.error(error.text);
                setInfoMsg(() => (
                    <>
                        <BiErrorAlt /> Oops, something went wrong. Please try again later or use option Email.
                    </>
                ));
            },
        );
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contact__content}>
                <div className={styles.contact__left}>
                    <h2>Contact</h2>
                    <form className={styles.contact__form} ref={form} onSubmit={handleSubmit}>
                        <div className={styles.contact__field}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="E.g. John Doe" required />
                        </div>
                        <div className={styles.contact__field}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="E.g. john@doe.com" required />
                        </div>
                        <div>
                            <label htmlFor="message" className={styles.contact__field}>
                                Message
                            </label>
                            <textarea name="message" id="message" rows={10} placeholder="Write your message" required />
                        </div>

                        <button type="submit">Send</button>
                    </form>
                    {infoMsg && <p className={styles.contact__info}>{infoMsg}</p>}
                </div>
                <div className={styles.contact__right}>
                    <ul>
                        <li className={styles.contact__item}>
                            <a href="mailto:tomasz.baranww@gmail.com" target="_blank" rel="noreferrer">
                                <AiOutlineMail /> Email
                            </a>
                        </li>
                        <li className={styles.contact__item}>
                            <a href="https://www.linkedin.com/in/tomaszbaranww" target="_blank" rel="noreferrer">
                                <AiOutlineLinkedin /> LinkedIn
                            </a>
                        </li>
                        <li className={styles.contact__item}>
                            <a href="https://github.com/PanWidmo" target="_blank" rel="noreferrer">
                                <AiOutlineGithub /> GitHub
                            </a>
                        </li>
                        <li className={styles.contact__item}>
                            <a
                                href="https://drive.google.com/drive/folders/1pFKku3Ipp9GuoTGKx6Yu3GmFTXFzA6Tl?usp=drive_link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiOutlineFileText /> CV
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
