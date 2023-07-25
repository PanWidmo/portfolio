import '@/assets/styles/global.scss';
import { Header } from '@/layout/Header/Header';
import { Footer } from '@/layout/Footer/Footer';
import { Hero } from '@/components/Hero/Hero.jsx';
import { About } from '@/components/About/About.jsx';
import { Skills } from '@/components/Skills/Skills.jsx';
import { Projects } from '@/components/Projects/Projects.jsx';
import { Contact } from '@/components/Contact/Contact.jsx';

export const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
};
