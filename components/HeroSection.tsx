import Layout from "./Layout";
import Heading from "./Heading";

function HeroSection() {
	return (
		<Layout id="home" as="section" className="hero bg-primary p-4 sm:p-8">
			<div className="flex flex-col">
				<Heading className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-bold text-blue-100 my-4 lg:my-8 xl:my-12 text-white">
					<span className="text-blue-500">Shayne</span>
					<span className="text-fuchsia-500"> LaRochelle</span>
				</Heading>
				<p className="text-white md:text-xl lg:text-2xl text-lg mt-2 mb-10 font-semibold md:max-w-3xl text-gray-300">
					I&apos;m a Professional Golfer turned Software Developer with
					experience designing, developing and deploying full-stack
					applications.
				</p>
			</div>
		</Layout>
	);
}

export default HeroSection;
