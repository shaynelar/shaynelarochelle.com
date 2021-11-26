import dynamic, { LoaderComponent } from "next/dynamic";
import React, { Component, useEffect, useLayoutEffect, useState } from "react";
import { IconBaseProps, IconType } from "react-icons";

interface Props {
	svg: IconType;
	label: string;
}

function TechBadge({ svg, label }: Props) {
	return (
		<div className="border-2 border-blue-300 p-4 rounded-2xl m-2 flex  items-center bg-dark shadow-2xl ">
			{svg({ className: "text-blue-200 text-3xl md:text-4xl" })}
			<span className="hidden sm:inline-block text-white ml-4">{label}</span>
		</div>
	);
}

export default TechBadge;

export function Icon({ svg }: { svg: string }) {
	const Icon = dynamic(
		() =>
			import("react-icons/si").then(
				(item) => item[svg]
			) as LoaderComponent<IconBaseProps>
	);

	return <Icon className="text-blue-200 text-2xl md:text-3xl mx-2" />;
}
