import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./home.css";
import axios from 'axios';
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Testimonial from "./components/Testimonial";
import GetInTouch from "./components/GetInTouch";
import Background from "./components/Background";

const Home = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => {
                setInfo(res.data.user);
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    const { ref: heroRef, inView: heroInView } = useInView();
    const { ref: aboutRef, inView: aboutInView } = useInView();
    const { ref: servicesRef, inView: servicesInView } = useInView();
    const { ref: skillsRef, inView: skillsInView } = useInView();
    const { ref: projectsRef, inView: projectsInView } = useInView();
    const { ref: timelineRef, inView: timelineInView } = useInView();
    const { ref: testimonialRef, inView: testimonialInView } = useInView();
    const { ref: getInTouchRef, inView: getInTouchInView } = useInView();

    if (info === null) {
        return <div>Loading...</div>;
    }

    return (
        <section className="pt-[90px] sm:pt-[40px] ">
			
            <motion.div ref={heroRef} animate={{ y: heroInView ? 0 : 100 }} initial={{ y: 100 }} transition={{ duration: 0.5 }}>
                <Hero data={info} />
            </motion.div>
            <motion.div ref={aboutRef} animate={{ y: aboutInView ? 0 : 100 }} initial={{ y: 100 }} transition={{ duration: 1 }}>
                <About data={info} />
            </motion.div>
            <motion.div ref={servicesRef} animate={{ y: servicesInView ? 0 : 100 }} initial={{ y: 100 }} transition={{ duration: 1 }}>
                <Services data={info} />
            </motion.div>
            <motion.div ref={skillsRef} animate={{ y: skillsInView ? 0 : 100 }} initial={{ y: 100 }} transition={{ duration: 1 }}>
                <Skills data={info} />
            </motion.div>
            <motion.div ref={projectsRef} animate={{ y: projectsInView ? 0 : 100 }} initial={{ y: 100 }} transition={{ duration: 1 }}>
                <Projects data={info} />
            </motion.div>
            <motion.div ref={timelineRef} animate={{ y: timelineInView ? 0 : 100 }} initial={{ y: 100 }} transition={{ duration: 1 }}>
                <Timeline data={info} />
            </motion.div>
            <motion.div ref={testimonialRef} animate={{ y: testimonialInView ? 0 : 100 }} initial={{ y: 100 }} transition={{ duration: 1 }}>
                <Testimonial data={info} />
            </motion.div>
            <motion.div ref={getInTouchRef} animate={{ y: getInTouchInView ? 0 : 100 }} initial={{ y: 100 }} transition={{ duration: 1 }}>
                <GetInTouch data={info} />
            </motion.div>
        </section>
    );
};

export default Home;
