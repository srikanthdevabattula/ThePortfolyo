import { useEffect, useState } from "react";

import "./home.css";
import axios from 'axios'
import About from "./components//About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Testimonial from "./components/Testimonial";
import GetInTouch from "./components/GetInTouch";

const Home = () => {
	const [info,setInfo] = useState(null)
	useEffect(() => {
        axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => {
                // console.log(res.data.user);
                setInfo(res.data.user);
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    if (info === null) {
        // Render loading indicator or placeholder if info is null
        return <div>Loading...</div>;
    }
	return (
		<section className="pt-[90px] sm:pt-[40px]">
			<Hero data={info}/>
			<About data={info}/>
			<Services data={info}/>
			<Skills data={info} />
			<Projects data={info}/>
			<Timeline data={info}/>
			<Testimonial data={info}/>
			<GetInTouch data={info}/>
		</section>
	);
};

export default Home;
