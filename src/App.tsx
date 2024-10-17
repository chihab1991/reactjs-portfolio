import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<AboutMe />
				<Projects />
				<Services />
				<Testimonials />
				<ContactMe />
			</main>
			<Footer />
		</>
	);
}

export default App;
