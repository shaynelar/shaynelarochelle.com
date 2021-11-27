import Layout from "./Layout";
import Heading from "./Heading";

function HeroSection() {
	return (
		<Layout id="home" as="section" className="hero bg-primary p-2">
			<div className="flex flex-col lg:flex-row">
				<div>
					<Heading className="2xl:text-8xl lg:text-7xl text-5xl font-bold text-blue-100 my-4 lg:my-8 xl:my-12">
						Shayne LaRochelle
					</Heading>
					<p className="text-white md:text-xl lg:text-2xl text-lg mt-2 mb-10 font-semibold md:max-w-3xl  block">
						I'm a Professional Golfer turned Software Developer with experience
						designing, developing and deploying full-stack applications.
					</p>
				</div>
			</div>
		</Layout>
	);
}

export default HeroSection;
