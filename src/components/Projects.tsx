const projects = [
	{
		title: "Project One",
		description:
			"A brief description of the project highlighting its key features and technologies used.",
		image: "/path-to-your-project-image-1.jpg",
		demoLink: "https://your-project-demo-link.com",
		codeLink: "https://github.com/your-repo-link",
	},
	{
		title: "Project Two",
		description:
			"Another brief description of a different project. Focus on its unique aspects.",
		image: "/path-to-your-project-image-2.jpg",
		demoLink: "https://your-project-demo-link.com",
		codeLink: "https://github.com/your-repo-link",
	},
	// Add more projects as needed
];

const Projects = () => {
	return (
		<section id="projects" className="bg-softWhite py-16 md:py-28">
			<div className="container mx-auto px-6 md:px-12">
				<h2 className="text-4xl font-bold text-charcoalGray text-center mb-12">
					My Projects
				</h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-one overflow-hidden transform hover:scale-105 transition duration-300"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
								<p className="text-coolGray mb-4">{project.description}</p>
								<div className="flex justify-between">
									<a
										href={project.demoLink}
										className="text-deepTeal hover:text-skyBlue transition duration-300"
									>
										View Demo
									</a>
									<a
										href={project.codeLink}
										className="text-warmOrange hover:text-skyBlue transition duration-300"
									>
										View Code
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Projects;
