import React from "react";
import { IconType } from "react-icons";

interface Props {
	svg: IconType;
	label: string;
}

function TechBadge({ svg, label }: Props) {
	return (
		<div className="border border-white p-4 rounded-2xl m-2 flex  items-center">
			{svg({ className: "text-blue-200 text-4xl" })}
			<span className="text-white ml-4">{label}</span>
		</div>
	);
}

export default TechBadge;
