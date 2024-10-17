import myImg from "./../assets/img/1648839809997.jpeg";
const AboutMe = () => {
	return (
		<section id="about" className="bg-softWhite text-charcoalGray py-40">
			<div className="container mx-auto px-6 md:px-12">
				<div className="flex flex-col md:flex-row items-center">
					<div className="w-full md:w-1/2 mb-8 md:mb-0 mx-auto">
						<img
							src={myImg}
							alt="Chergui Chihab Iddine"
							className="rounded-full img-shadow w-44 md:w-60 mx-auto"
						/>
					</div>

					{/* About Me Text */}
					<div className="w-full md:w-1/2 md:pl-12">
						<h2 className="text-4xl font-bold mb-6">About Me</h2>
						<p className="text-lg text-coolGray mb-6">
							I'm a passionate web developer with experience in building
							high-quality websites and web applications using modern
							technologies like <span className="text-skyBlue">React</span>,{" "}
							<span className="text-skyBlue">Next.js</span>, and{" "}
							<span className="text-skyBlue">Node.js</span>. I specialize in
							creating fast, responsive, and user-friendly digital experiences.
						</p>
						<p className="text-lg text-coolGray mb-8">
							With a strong background in both front-end and back-end
							development, I can deliver full-stack solutions that help
							businesses grow and succeed. My goal is to turn ideas into
							efficient, scalable, and beautiful products.
						</p>
						<a
							href="#projects"
							className="bg-deepTeal text-softWhite py-3 px-6  rounded-lg hover:bg-skyBlue transition duration-300"
						>
							View My Projects
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
