import React from "react";

interface Props {
	source: string;
}

export default function Video({ source }: Props) {
	return (
		<video
			className="object-cover md:rounded-md w-full  shadow-md md:h-80"
			controls={true}
			width="1920px"
			height="1080px"
			muted={true}
		>
			<source src={source} />
		</video>
	);
}
