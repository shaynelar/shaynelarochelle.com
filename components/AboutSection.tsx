import React from "react";
import Container from "./Container";
import Heading from "./Heading";

const AboutSection = () => {
	return (
		<section>
			<Container
				as="article"
				className="hero bg-primary p-2 flex-col flex 2xl:px-96 xl:px-60 md:px-10 px-4 justify-center items-center align-center py-10  border-b border-blue-500"
			>
				<Heading className="text-4xl">About Me</Heading>
				<div className="">
					<img
						src="/myself.jpg"
						className="rounded-sm h-44 float-right ml-4 lg:h-80 rounded-2xl"
						alt="Image of Shayne"
					/>

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
				</div>
				<h1 className="mt-8 mb-4">
					<span className="md:text-xl sm:text-lg font-bold">
						Tech I've Been Working With Recently:
					</span>
				</h1>
				<div className="flex flex-row space-x-10 md:px-0 px-4">
					<ul className="list-disc md:list-inside">
						<li className="text-blue-500">
							<span className="md:text-lg sm:text-md">TypeScript</span>
						</li>
						<li className="text-blue-500">
							<span className="md:text-lg sm:text-md">JavaScript</span>
						</li>
						<li className="text-blue-500">
							<span className="md:text-lg sm:text-md">Python</span>
						</li>
					</ul>
					<ul className="list-disc md:list-inside">
						<li className="text-blue-500">
							<span className="md:text-lg sm:text-md">React</span>
						</li>

						<li className="text-blue-500">
							<span className="md:text-lg sm:text-md">Next.Js</span>
						</li>
					</ul>
					<ul className="list-disc md:list-inside">
						<li className="text-blue-500">
							<span className="md:text-lg sm:text-md">GraphQL</span>
						</li>
						<li className="text-blue-500">
							<span className="md:text-lg sm:text-md">
								AWS (Lambda, API Gateway, RDS, S3)
							</span>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default AboutSection;
