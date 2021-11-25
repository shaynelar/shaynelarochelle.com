import Container from "./Container";
import Heading from "./Heading";

function HeroSection() {
	return (
		<Container as="section" className="hero bg-primary p-2">
			<div className="flex flex-col lg:flex-row">
				<div>
					<Heading className="2xl:text-8xl lg:text-7xl text-5xl font-bold text-gray-200">
						Shayne LaRochelle
					</Heading>
					<p className=" md:text-xl text-lg mt-2 mb-10 font-semibold md:max-w-2xl max-w-md block">
						I'm a Professional Golfer turned Software Developer with experience
						designing, developing and deploying full-stack applications.
					</p>
				</div>
			</div>
		</Container>
	);
}

export default HeroSection;
