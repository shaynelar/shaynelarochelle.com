import FlexContainer from "./FlexContainer";
import Heading from "./Heading";


function HeroSection() {
	return (
		<FlexContainer id="home" as="section" className="hero bg-primary p-2">
			<div className="flex flex-col lg:flex-row">
				<div>
					<Heading className="2xl:text-8xl lg:text-7xl text-5xl font-bold text-blue-200">
						Shayne LaRochelle
					</Heading>
					<p className="text-white md:text-xl text-lg mt-2 mb-10 font-semibold md:max-w-2xl max-w-md block">
						I'm a Professional Golfer turned Software Developer with experience
						designing, developing and deploying full-stack applications.
					</p>
				</div>
			</div>
		</FlexContainer>
	);
}

export default HeroSection;
