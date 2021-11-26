import React from "react";
import FlexContainer from "./FlexContainer";
import {
	SiTypescript,
	SiJavascript,
	SiPython,
	SiNextdotjs,
	SiAmazonaws,
	SiReact,
	SiCss3,
	SiSass,
	SiGraphql,
} from "react-icons/si";
import TechBadge from "./TechBadge";
import Heading from "./Heading";

function TechSection() {
	return (
		<FlexContainer
			as="section"
			className="flex flex-col min-h-screen bg-primary p-4 md:p-8 lg:p-20 xl:p-40 "
		>
			<Heading className="text-2xl text-white text-center font-bold my-8">
				Tech I've been working with recently
			</Heading>
			<div className="flex flex-wrap justify-center max-w-5xl">
				<TechBadge label="TypeScript" svg={SiTypescript} />
				<TechBadge label="JavaScript" svg={SiJavascript} />
				<TechBadge label="React" svg={SiReact} />
				<TechBadge label="GraphQL" svg={SiGraphql} />
				<TechBadge label="Python" svg={SiPython} />
				<TechBadge label="Next.JS" svg={SiNextdotjs} />
				<TechBadge label="CSS3" svg={SiCss3} />
				<TechBadge label="SCSS" svg={SiSass} />
				<TechBadge label="AWS Cloud" svg={SiAmazonaws} />
			</div>
		</FlexContainer>
	);
}

export default TechSection;
