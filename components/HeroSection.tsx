import Layout from "./Layout";
import Heading from "./Heading";
import { motion } from "framer-motion";

export default function HeroSection() {
	return (
		<Layout id="home" as="section" className="hero p-4 sm:p-8">
			<div className="flex flex-col">
				<motion.div
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{
						x: {
							type: "just",
							stiffness: 1000,
							velocity: 0.2,
							ease: "easeOut",
						},
						default: { duration: 1.5 },
					}}
				>
					<Heading className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-bold text-blue-100 my-4 lg:my-8 xl:my-12">
						<span className="dark:text-green-500 text-blue-600">
							Shayne
						</span>
						<span className="dark:text-green-500 text-blue-600">
							{" "}
							LaRochelle
						</span>
					</Heading>
				</motion.div>
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						default: { duration: 2.2, delay: 0.4 },
					}}
					className="dark:text-white  md:text-xl lg:text-2xl text-lg mt-2 mb-10 font-semibold md:max-w-3xl text-gray-500"
				>
					I&apos;m a Professional Golfer turned Software Developer with
					experience designing, developing and deploying full-stack
					applications.
				</motion.p>
			</div>
		</Layout>
	);
}


