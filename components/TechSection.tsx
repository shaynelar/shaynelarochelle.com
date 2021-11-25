import React from "react";
import Container from "./Container";
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
		<Container as="section" className="flex flex-col  hero bg-primary">
            <Heading className="text-2xl text-center font-bold">Tech I've been working with recently</Heading>
			<div className="flex flex-wrap justify-center">
				<TechBadge label="TypeScript" svg={SiTypescript} />
				<TechBadge label="JavaScript" svg={SiJavascript} />
				<TechBadge label="React" svg={SiReact} />
				<TechBadge label="GraphQL" svg={SiGraphql} />
				<TechBadge label="Python" svg={SiPython} />
				<TechBadge label="Next.JS" svg={SiNextdotjs} />
				<TechBadge label="CSS3" svg={SiCss3} />
				<TechBadge label="SASS" svg={SiSass} />
				<TechBadge label="AWS Cloud" svg={SiAmazonaws} />
			</div>
		</Container>
	);
}

export default TechSection;
