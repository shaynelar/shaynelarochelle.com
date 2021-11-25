import React from "react";
import FlexContainer from "./FlexContainer";
import Heading from "./Heading";

const AboutSection = () => {
	return (
		<section>
			<FlexContainer
				as="article"
				className="min-h-screen bg-primary p-4 flex-col flex  xl:px-60 md:px-10 px-4 justify-center align-center"
			>
				<Heading className="text-5xl text-white font-semibold mb-8">
					About Me
				</Heading>
				<div className="flex flex-col md:flex-row md:gap-4 text-white">
					<p className="text-left md:text-lg sm:text-md">
						{" "}
						Hi, I'm Shayne! My interest in programming started in high school,
						and developed further as I studied finance in university with the
						goal of becoming a Data Scientist or Quantitative Analyst in the
						financial sector.
						<br />
						<br />
						As I delved deeper into the world of programming, I found my passion
						for application development and user-centric problem solving.
						Currently, I spend most of my free time building full stack projects
						and expanding my knowledge of new technologies.{" "}
					</p>
					<img
						src="/myself.jpg"
						className="md:h-60 lg:h-96 rounded-2xl mt-10 md:mt-0"
						alt="Picture of Shayne"
					/>
				</div>
			</FlexContainer>
		</section>
	);
};

export default AboutSection;
