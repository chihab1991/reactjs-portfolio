import janeSmith from "./../assets/img/janeSmith.jpeg";
import johnDoe from "./../assets/img/johnDoe.jpeg";

const testimonials = [
	{
		name: "John Doe",
		role: "CEO, TechCorp",
		feedback:
			"Working with you was a fantastic experience. You delivered the project on time and exceeded our expectations!",
		image: johnDoe, // Optional
	},
	{
		name: "Jane Smith",
		role: "Product Manager, WebApp Co.",
		feedback:
			"Your attention to detail and ability to solve complex problems is truly impressive. The end result was outstanding.",
		image: janeSmith, // Optional
	},
	// Add more testimonials as needed
];

const Testimonials = () => {
	return (
		<section id="testimonials" className="bg-softWhite py-16 md:py-28">
			<div className="container mx-auto px-6 md:px-12">
				<h2 className="text-4xl font-bold text-charcoalGray text-center mb-12">
					What Clients Say
				</h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-one p-6 transition-shadow duration-300"
						>
							{testimonial.image && (
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-16 h-16 rounded-full mx-auto mb-4 shadow-one"
								/>
							)}
							<h3 className="text-xl font-semibold text-center text-charcoalGray">
								{testimonial.name}
							</h3>
							<p className="text-sm text-center text-coolGray mb-4">
								{testimonial.role}
							</p>
							<p className="text-center text-coolGray italic">
								"{testimonial.feedback}"
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
