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
	SiPostgresql,
	SiMysql,
	SiNodedotjs,
	SiAngular,
} from "react-icons/si";
import { m as motion } from "framer-motion";
import Layout from "./Layout";
import TechBadge from "./TechBadge";
import Heading from "./Heading";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,

		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function TechSection() {
	return (
		<Layout
			as="section"
			className="flex flex-col min-h-screen  p-4 md:p-8 lg:p-20 xl:p-40 "
		>
			<Heading className="text-2xl lg:text-5xl text-white text-center font-bold my-8">
				Tech I&apos;ve been working with recently
			</Heading>

			<motion.ul
				className="flex flex-wrap justify-center max-w-5xl md:mt-4"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<TechBadge label="TypeScript" svg={SiTypescript} />
				<TechBadge label="JavaScript" svg={SiJavascript} />
				<TechBadge label="React" svg={SiReact} />
				<TechBadge label="Angular" svg={SiAngular} />
				<TechBadge label="Node.js" svg={SiNodedotjs} />
				<TechBadge label="GraphQL" svg={SiGraphql} />
				<TechBadge label="Python" svg={SiPython} />
				<TechBadge label="Next.js" svg={SiNextdotjs} />
				<TechBadge label="CSS3" svg={SiCss3} />
				<TechBadge label="SCSS" svg={SiSass} />
				<TechBadge label="PostgreSQL" svg={SiPostgresql} />
				<TechBadge label="MySQL" svg={SiMysql} />
				<TechBadge label="AWS" svg={SiAmazonaws} />
			</motion.ul>
		</Layout>
	);
}
