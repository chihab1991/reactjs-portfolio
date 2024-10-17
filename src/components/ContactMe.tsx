import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
	const form = useRef();

	const handleSubmit = async (e): void => {
		e.preventDefault();

		emailjs
			.sendForm("service_xrlcnup", "template_ebflcbl", form.current, {
				publicKey: "ydD0vJtV6UcRDwwg7",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
		e.target.reset();
	};

	return (
		<section id="contact" className="bg-softWhite py-16  md:py-28">
			<div className="container mx-auto px-6 md:px-12">
				<h2 className="text-4xl font-bold text-charcoalGray text-center mb-12">
					Get in Touch
				</h2>
				<div className="max-w-3xl mx-auto shadow-two">
					<form
						ref={form}
						onSubmit={handleSubmit}
						className="bg-white p-8 rounded-lg shadow-lg space-y-6"
					>
						<div>
							<label
								htmlFor="name"
								className="block text-charcoalGray font-medium mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full px-4 py-2 border border-coolGray rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
								placeholder="Your Name"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-charcoalGray font-medium mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full px-4 py-2 border border-coolGray rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
								placeholder="Your Email"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="subject"
								className="block text-charcoalGray font-medium mb-2"
							>
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								className="w-full px-4 py-2 border border-coolGray rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
								placeholder="Subject"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-charcoalGray font-medium mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								className="w-full h-32 px-4 py-2 border border-coolGray rounded-md focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
								placeholder="Your Message"
								required
							/>
						</div>
						<div className="text-center">
							<button
								type="submit"
								className="bg-skyBlue text-white px-6 py-3 rounded-md hover:bg-deepTeal transition duration-300"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactMe;
