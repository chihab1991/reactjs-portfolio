import { useState } from "react";
import logo from "../assets/img/logo.png";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className=" fixed w-full bg-richNavyBlue text-softWhite bottom-shadow z-[10000]">
			<div className="container mx-auto flex justify-between items-center py-4 px-6">
				{/* Logo */}
				<div className="text-2xl font-bold">
					<a href="#hero">
						<img src={logo} alt="chergui chihab" className="w-12" />
					</a>
				</div>

				{/* Menu (Large Screens) */}
				<div className="hidden md:flex space-x-6">
					<a href="#about" className="hover:text-teal transition">
						About
					</a>
					<a href="#projects" className="hover:text-teal transition">
						Projects
					</a>
					<a href="#services" className="hover:text-teal transition">
						Services
					</a>
					<a href="#testimonials" className="hover:text-teal transition">
						Testimonials
					</a>
				</div>
				<div className="hidden md:flex space-x-6">
					<a
						href="#contact"
						className="bg-deepTeal text-softWhite py-3 px-8 rounded-lg hover:bg-skyBlue transition duration-300"
					>
						Hire me
					</a>
				</div>

				{/* Hamburger Icon (Small Screens) */}
				<div className="md:hidden">
					<button onClick={toggleMenu}>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* Dropdown Menu (Mobile) */}
			{/* TODO add a dropdown animation */}
			<div
				className={`md:hidden ${
					isOpen ? "block" : "hidden"
				} bg-richNavyBlue px-6 pb-4`}
			>
				<a href="#about" className="block py-2 hover:text-teal">
					About
				</a>
				<a href="#projects" className="block py-2 hover:text-teal">
					Projects
				</a>
				<a href="#services" className="block py-2 hover:text-teal">
					Services
				</a>
				<a href="#testimonials" className="block py-2 hover:text-teal">
					Testimonials
				</a>
				<a href="#contact" className="block py-2 hover:text-teal">
					Contact
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
