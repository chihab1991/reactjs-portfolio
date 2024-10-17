import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaGitAlt,
	FaGithub,
} from "react-icons/fa";
import {
	SiTypescript,
	SiNextdotjs,
	SiMongodb,
	SiTailwindcss,
	SiExpress,
} from "react-icons/si";

const Skills = () => {
	return (
		<section className="bg-gray-50 py-16">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
					Skills
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{/* Frontend Development */}
					<div>
						<h3 className="text-2xl font-semibold text-teal-500 mb-4">
							Frontend Development
						</h3>
						<ul className="space-y-4 text-gray-700 text-lg">
							<li className="flex items-center space-x-3">
								<FaJs className="text-yellow-500" size={24} />
								<span>JavaScript (ES6+)</span>
							</li>
							<li className="flex items-center space-x-3">
								<SiTypescript className="text-blue-600" size={24} />
								<span>TypeScript</span>
							</li>
							<li className="flex items-center space-x-3">
								<FaReact className="text-blue-500" size={24} />
								<span>React</span>
							</li>
							<li className="flex items-center space-x-3">
								<SiNextdotjs className="text-gray-900" size={24} />
								<span>Next.js</span>
							</li>
							<li className="flex items-center space-x-3">
								<FaHtml5 className="text-orange-600" size={24} />
								<span>HTML5</span>
							</li>
							<li className="flex items-center space-x-3">
								<FaCss3Alt className="text-blue-600" size={24} />
								<span>CSS3</span>
							</li>
							<li className="flex items-center space-x-3">
								<SiTailwindcss className="text-teal-500" size={24} />
								<span>Tailwind CSS</span>
							</li>
						</ul>
					</div>

					{/* Backend Development */}
					<div>
						<h3 className="text-2xl font-semibold text-teal-500 mb-4">
							Backend Development
						</h3>
						<ul className="space-y-4 text-gray-700 text-lg">
							<li className="flex items-center space-x-3">
								<FaNodeJs className="text-green-600" size={24} />
								<span>Node.js</span>
							</li>
							<li className="flex items-center space-x-3">
								<SiExpress className="text-gray-800" size={24} />
								<span>Express.js</span>
							</li>
							<li className="flex items-center space-x-3">
								<SiMongodb className="text-green-500" size={24} />
								<span>MongoDB</span>
							</li>
						</ul>
					</div>

					{/* Tools & Version Control */}
					<div>
						<h3 className="text-2xl font-semibold text-teal-500 mb-4">
							Version Control & Tools
						</h3>
						<ul className="space-y-4 text-gray-700 text-lg">
							<li className="flex items-center space-x-3">
								<FaGitAlt className="text-orange-600" size={24} />
								<span>Git</span>
							</li>
							<li className="flex items-center space-x-3">
								<FaGithub className="text-gray-800" size={24} />
								<span>GitHub</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
