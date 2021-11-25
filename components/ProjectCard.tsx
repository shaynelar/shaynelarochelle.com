import React from "react";
import { SiTypescript } from "react-icons/si";
import { ActionButton, NavButton } from "./Button";
import Heading from "./Heading";
import TechBadge, { Icon } from "./TechBadge";
import dynamic from "next/dynamic";

interface Props {
	title: string;
	about: string;
	image: string;
	svg: string[];
}

function ProjectCard({ title, about, image, svg }: Props) {
	return (
		<div
			id={`${title}-card`}
			className="p-12 rounded-2xl bg-dark shadow-2xl shadow-xl max-w-2xl"
		>
			{/* <img className="object-contain absolute top-0" src={image} /> */}

			<Heading className="text-4xl font-semibold text-white my-8">
				{title}
			</Heading>
			<p className="text-white my-4">{about}</p>
			<div className="flex mt-8 md:mt-12">
				<NavButton className="px-8 py-4" href="#">Read More</NavButton>
				<div className="hidden sm:flex mx-2 px-4 bg-primary rounded-lg flex-grow items-center justify-evenly">
					{svg.map((icon) => (
						<Icon key={icon} svg={icon} />
					))}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
