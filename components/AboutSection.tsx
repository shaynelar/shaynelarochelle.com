import React from "react";
import Layout from "./Layout";
import Heading from "./Heading";
import Image from "next/image";

export default function AboutSection() {
	return (
		<Layout
			id="about"
			as="article"
			className="min-h-screen p-4 flex-col flex xl:px-56 lg:px-24 md:px-10 px-4 justify-center align-center relative"
		>
			<Heading className="text-5xl lg:text-6xl font-semibold mb-8 lg:my-12">
				About Me
			</Heading>
			<div className="flex flex-col md:flex-row md:gap-4 text-white">
				<p className="text-left text-lg dark:text-gray-300 text-dark lg:text-2xl ">
					{" "}
					Hi, I&apos;m Shayne! My interest in programming started in high
					school, and developed further as I studied finance in university with
					the goal of becoming a data scientist or quantitative analyst in the
					financial sector.
					<br />
					<br />
					As I delved deeper into the world of programming, I found my passion
					for application development and user-centric problem solving.
					Currently, I spend most of my free time building full stack projects
					and expanding my knowledge of new technologies.{" "}
				</p>
				<div className="md:h-60 lg:h-full w-full rounded-2xl mt-10 md:mt-0 overflow-hidden">
					<Image
						src="/myself.jpg"
						alt="Picture of Shayne"
						className="rounded-2xl"
						width="800px"
						height="800px"
					/>
				</div>
			</div>
		</Layout>
	);
}
