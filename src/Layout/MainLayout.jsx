import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
	return (
		<main>
			
			<div><Header /></div>
			<div ><Outlet /></div>
			<Footer />
		</main>
	);
};

export default MainLayout;
