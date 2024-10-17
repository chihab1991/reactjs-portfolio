import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-richNavyBlue text-softWhite py-8">
			<div className="container mx-auto px-6 md:px-12 text-white">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Column 1: About or Logo */}
					<div className="mb-6 lg:mb-0">
						<h3 className="text-2xl font-bold mb-4">Chergui Chihab Iddine</h3>
						<p className="text-lightGray">
							Building modern web applications with passion and precision. Let’s
							build something great together!
						</p>
					</div>

					{/* Column 2: Quick Links */}
					<div className="hidden md:block mb-6 lg:mb-0">
						<h3 className="text-2xl  font-bold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<a href="#about" className="hover:underline">
									About Me
								</a>
							</li>
							<li>
								<a href="#projects" className="hover:underline">
									Projects
								</a>
							</li>
							<li>
								<a href="#services" className="hover:underline">
									Services
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:underline">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Column 3: Social Media Links */}
					<div className="mb-6 lg:mb-0">
						<h3 className="text-2xl font-bold mb-4">Follow Me</h3>
						<div className="flex space-x-4">
							<a
								href="https://github.com/chihab1991"
								target="_blank"
								rel="noopener noreferrer"
								className="text-coolGray hover:text-skyBlue"
							>
								<FaGithub size={24} />
							</a>
							<a
								href="https://www.linkedin.com/in/chihab-iddine-elhocine-chergui-885883210/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-coolGray hover:text-skyBlue"
							>
								<FaLinkedin size={24} />
							</a>
							{/* <a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-coolGray hover:text-skyBlue"
							>
								<FaTwitter size={24} />
							</a> */}
						</div>
					</div>
				</div>

				{/* Copyright Section */}
				<div className="mt-8 border-t border-coolGray pt-4 text-center text-sm">
					<p>
						&copy; {new Date().getFullYear()} Chergui Chihab Iddine. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
