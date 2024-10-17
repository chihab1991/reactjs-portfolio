// import chihab from "../assets/img/1648839809997.jpeg";

const Hero = () => {
	return (
		<section
			id="hero"
			className="bg-richNavyBlue text-softWhite h-screen flex items-center"
		>
			<div className="container mx-auto px-6 md:px-12 text-center md:text-left">
				<h1 className="text-4xl md:text-6xl font-bold leading-tight">
					Hi, I'm <span className="text-warmOrange">Your Name</span>, <br />a
					Full Stack Web Developer
				</h1>
				<p className="mt-4 text-lg md:text-xl text-coolGray max-w-lg">
					I specialize in building fast, responsive, and scalable websites using
					modern technologies like <span className="text-skyBlue">React</span>,{" "}
					<span className="text-skyBlue">Next.js</span>, and{" "}
					<span className="text-skyBlue">Node.js</span>.
				</p>
				<div className="mt-8">
					<a
						href="#projects"
						className="bg-deepTeal inline-block text-softWhite py-3 px-8 rounded-lg hover:bg-skyBlue transition duration-300 mx-2 mb-4 mx-auto"
					>
						View My Work
					</a>
					<a
						href="#contact"
						className="md:ml-4 bg-warmOrange inline-block text-softWhite py-3 px-8 rounded-lg hover:bg-deepTeal transition duration-300 mx-2"
					>
						Contact Me
					</a>
				</div>
			</div>
		</section>
	);
};
export default Hero;
