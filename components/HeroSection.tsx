import Container from "./Container";
import Heading from "./Heading";

const HeroSection = () => {
	return (
		<section className="">
			<Container>
				<div className="flex flex-col">
					<Heading className="text-5xl font-bold">Shayne LaRochelle</Heading>
					<p className="mt-4 text-xl">
						I am a Software Developer with experience designing, developing and
						deploying full-stack applications.
					</p>
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
