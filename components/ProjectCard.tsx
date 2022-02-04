import React from "react";

import { motion } from "framer-motion";
import Heading from "./Heading";
import { Icon } from "./TechBadge";
import Tag from "./Tag";
import { SiGithub } from "react-icons/si";
import { IoIosRocket, IoMdGlasses } from "react-icons/io";
import ContactLink from "./ContactLink";
interface Props {
	project: {
		title: string;
		about: string;
		image: string | null;
		video: string | null;
		type: {
			title: string;
			color: string;
		};
		svg: string[];
		github: string | null;
		live: string | null;
		blog: string | null;
	};
}

export default function ProjectCard({ project }: Props) {
	return (
		<motion.div
			id={`${project.title}-card`}
			className="p-6 sm:pd-8 md:p-12 rounded-2xl dark:bg-dark bg-light  shadow-xl max-w-xl lg:max-w-2xl h-full relative flex flex-col gap-4"
			initial={{ opacity: 0, y: 150 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
		>
			<div className="flex justify-between gap-1">
				<div className="flex flex-col">
					<Heading className="text-3xl md:text-4xl font-semibold text-gray-100 my-8">
						{project.title}
					</Heading>
					<div className="md:my-8 flex flex-col gap-4">
						<Tag label={project.type.title} color={project.type.color} />
						<div
							className={`flex flex-col md:flex-row gap-2 ${
								!project.blog && !project.live && !project.github && "lg:my-6"
							}`}
						>
							{project.github && (
								<ContactLink
									link={project.github}
									label="View the code"
									Tag={SiGithub}
								/>
							)}
							{project.live && (
								<ContactLink
									link={project.live}
									label="View it Live"
									Tag={IoIosRocket}
								/>
							)}
							{project.blog && (
								<ContactLink
									link={project.blog}
									label="Read the blog"
									Tag={IoMdGlasses}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
			<p className="dark:text-gray-300 text-primary  text-lg lg:text-2xl lg:h-32">
				{project.about}
			</p>
			<div className="hidden sm:flex mb-4 p-4 py-6 dark:bg-primary bg-white rounded-lg flex-grow items-center justify-evenly shadow-lg">
				{project.svg.map((icon) => (
					<Icon key={icon} svg={icon} />
				))}
			</div>
			{project.image && (
				<img
					className="hidden lg:block relative bottom-0 right-0  object-cover rounded-lg w-full h-80 mt-4"
					src={project.image}
				/>
			)}

			{project.video && (
				<video
					className="hidden lg:block relative bottom-0 right-0  object-cover rounded-lg w-full h-80 mt-4"
					autoPlay
					controls
					src={project.video + "#t=0.5"}
					placeholder={project.video + "#t=0.5"}
				></video>
			)}
		</motion.div>
	);
}
