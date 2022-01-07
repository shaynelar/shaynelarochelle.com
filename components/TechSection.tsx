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
import { motion } from "framer-motion";
import Lazy from "react-lazyload";
import Layout from "./Layout";
import TechBadge from "./TechBadge";
import Heading from "./Heading";

export default function TechSection() {
	return (
		<Layout
			as="section"
			className="flex flex-col min-h-screen  p-4 md:p-8 lg:p-20 xl:p-40 "
		>
			<Heading className="text-2xl lg:text-5xl text-white text-center font-bold my-8">
				Tech I&apos;ve been working with recently
			</Heading>
			<Lazy>
				<motion.div
					className="flex flex-wrap justify-center max-w-5xl md:mt-4"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<TechBadge label="TypeScript" svg={SiTypescript} />
					<TechBadge label="JavaScript" svg={SiJavascript} />
					<TechBadge label="React" svg={SiReact} />
					<TechBadge label="GraphQL" svg={SiGraphql} />
					<TechBadge label="Python" svg={SiPython} />
					<TechBadge label="Next.JS" svg={SiNextdotjs} />
					<TechBadge label="CSS3" svg={SiCss3} />
					<TechBadge label="SCSS" svg={SiSass} />
					<TechBadge label="AWS Cloud" svg={SiAmazonaws} />
				</motion.div>
			</Lazy>
		</Layout>
	);
}
