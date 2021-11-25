import React from "react";
import { SiTypescript } from "react-icons/si";
import { ActionButton, NavButton } from "./Button";
import Heading from "./Heading";
import TechBadge from "./TechBadge";

interface Props {
	title: string;
	about: string;
	image: string;
}

function ProjectCard({ title, about, image }: Props) {
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

			<NavButton href="#">Read More</NavButton>
		</div>
	);
}

export default ProjectCard;
