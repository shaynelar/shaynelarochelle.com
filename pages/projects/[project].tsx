import dynamic from "next/dynamic";
import Head from "next/head";
import { IoIosRocket } from "react-icons/io";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import ContactLink from "../../components/ContactLink";
import NavBar from "../../components/NavBar";
import { Project as ProjectType } from "../../utils/types";

export default function Project({ project }: { project: ProjectType }) {
	const ProjectBlogSection = dynamic(
		() => import("../../components/ProjectBlogSection")
	);
	const Footer = dynamic(() => import("../../components/Footer"));
	return (
		<>
			<Head>
				<title>Shayne LaRochelle | {project.about.title}</title>
			</Head>
			<NavBar />
			<Layout
				as="section"
				className="min-h-screen p-4 md:py-8 lg:py-14 flex-col flex gap-4 lg:px-44 xl:px-60 md:px-24 px-10 sm:px-14 "
			>
				<Heading className="dark:text-white text-primary  lg:text-5xl">
					{project.about.title}
				</Heading>
				{project.about.live ? (
					<ContactLink
						link={project.about.live}
						label="View it live"
						Tag={IoIosRocket}
					/>
				) : (
					<p className="dark:text-white">Offline</p>
				)}
				<p className="dark:text-gray-300 text-primary  text-lg lg:text-xl leading-10  my-4">
					{project.about.description}
				</p>

				<ProjectBlogSection title="What I Learned" items={project.learned} />
				<ProjectBlogSection
					title="Things that we're tough"
					items={project.challenges}
				/>
				<ProjectBlogSection
					title="Things I'd do differently next time"
					items={project.different}
				/>
			</Layout>

			<Footer />
		</>
	);
}

type Params = {
	params: {
		project: "jobrium" | "friends-of-japan";
	};
};
export async function getStaticProps({ params }: Params) {
	const data = require(`../../data/projectData/${params.project}.json`);
	return {
		props: {
			project: data,
		},
	};
}
export async function getStaticPaths() {
	return {
		paths: [
			{ params: { project: "jobrium" } },
			{ params: { project: "friendsofjapan" } },
		],
		fallback: false,
	};
}
