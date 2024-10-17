// import { FaLaptopCode, FaServer } from "react-icons/fa";

// const Services = () => {
// 	return (
// 		<section className="bg-softWhite py-16">
// 			<div className="container mx-auto px-6">
// 				<h2 className="text-4xl text-charcoalGray font-bold text-gray-900 text-center mb-12">
// 					My Services
// 				</h2>

// 				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// 					{/* Frontend Development */}
// 					<div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
// 						<div className="flex items-center justify-center mb-6">
// 							<FaLaptopCode className="text-teal-500" size={48} />
// 						</div>
// 						<h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
// 							Frontend Development
// 						</h3>
// 						<p className="text-gray-600 mb-4 text-center">
// 							I specialize in building responsive, interactive, and modern user
// 							interfaces using technologies like React, Next.js, and Tailwind
// 							CSS. My focus is on delivering clean and maintainable code with a
// 							keen attention to design and performance.
// 						</p>
// 						<ul className="text-gray-700 space-y-2">
// 							<li className="flex items-center">
// 								<span className="text-teal-500 w-4 h-4 mr-2">•</span> Responsive
// 								Web Design
// 							</li>
// 							<li className="flex items-center">
// 								<span className="text-teal-500 w-4 h-4 mr-2">•</span> Single
// 								Page Applications (SPA)
// 							</li>
// 							<li className="flex items-center">
// 								<span className="text-teal-500 w-4 h-4 mr-2">•</span> React &
// 								Next.js Development
// 							</li>
// 							<li className="flex items-center">
// 								<span className="text-teal-500 w-4 h-4 mr-2">•</span>{" "}
// 								Component-Based Architecture
// 							</li>
// 							<li className="flex items-center">
// 								<span className="text-teal-500 w-4 h-4 mr-2">•</span>{" "}
// 								Performance Optimization
// 							</li>
// 						</ul>
// 					</div>

// 					{/* Backend Development */}
// 					<div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
// 						<div className="flex items-center justify-center mb-6">
// 							<FaServer className="text-teal-500" size={48} />
// 						</div>
// 						<h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
// 							Backend Development
// 						</h3>
// 						<p className="text-gray-600 mb-4 text-center">
// 							As a backend developer, I build scalable and efficient server-side
// 							applications using Node.js and Express.js. I work with databases
// 							like MongoDB to ensure your applications run smoothly and
// 							efficiently.
// 						</p>
// 						<ul className="text-gray-700 space-y-2">
// 							<li className="flex items-center">
// 								<span className="text-teal-500 w-4 h-4 mr-2">•</span> RESTful
// 								API Development
// 							</li>
// 							<li className="flex items-center">
// 								<span className="text-teal-500 w-4 h-4 mr-2">•</span> Node.js &
// 								Express.js
// 							</li>
// 							<li className="flex items-center">
// 								<span className="text-teal-500 w-4 h-4 mr-2">•</span> Database
// 								Management (MongoDB)
// 							</li>
// 							<li className="flex items-center">
// 								<span className="text-teal-500 w-4 h-4 mr-2">•</span>{" "}
// 								Authentication & Security
// 							</li>
// 							<li className="flex items-center">
// 								<span className="text-teal-500 w-4 h-4 mr-2">•</span> Cloud
// 								Deployment & Maintenance
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa"; // Importing icons for each service

const services = [
	{
		title: "Frontend Development",
		description:
			"I build modern, responsive websites using React and Next.js, ensuring a seamless user experience.",
		icon: <FaCode className="text-skyBlue h-12 w-12" />,
	},
	{
		title: "Backend Development",
		description:
			"I develop scalable backend systems with Node.js and Express, creating efficient server-side applications.",
		icon: <FaServer className="text-warmOrange h-12 w-12" />,
	},
	{
		title: "Mobile Responsive Design",
		description:
			"I design and optimize websites for mobile and tablet devices to ensure cross-platform compatibility.",
		icon: <FaMobileAlt className="text-deepTeal h-12 w-12" />,
	},
];

const Services = () => {
	return (
		<section id="services" className="bg-softWhite py-16  md:py-28">
			<div className="container mx-auto px-6 md:px-12">
				<h2 className="text-4xl font-bold text-charcoalGray text-center mb-12">
					My Services
				</h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-one p-6 text-center transition-shadow duration-300"
						>
							<div className="mb-6">{service.icon}</div>
							<h3 className="text-2xl font-semibold text-charcoalGray mb-4">
								{service.title}
							</h3>
							<p className="text-coolGray mb-4">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
