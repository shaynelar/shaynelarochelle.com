import { promises as fs } from "fs";
import path from "path";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { IoIosRocket } from "react-icons/io";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import ContactLink from "../../components/ContactLink";
import NavBar from "../../components/NavBar";
import LazyWrapper from "../../components/LazyWrapper";
import { IProjects } from "../../utils/types";

export default function Project({ projects }: { projects: IProjects[] }) {
	const router = useRouter();
	const { project } = router.query;

	const pageData = projects[0].content.filter(
		(content) => content.about.slug === project
	)[0];

	const ProjectBlogSection = dynamic(
		() => import("../../components/ProjectBlogSection")
	);
	const Footer = dynamic(() => import("../../components/Footer"));
	return (
		<>
			<Head>
				<title>Shayne LaRochelle | {pageData.about.title}</title>
			</Head>
			<NavBar />
			<Layout
				as="section"
				className="min-h-screen p-4 md:py-8 lg:py-14 flex-col flex gap-4 lg:px-44 xl:px-60 md:px-24 px-10 sm:px-14 "
			>
				<Heading className="dark:text-white text-primary  lg:text-5xl">
					{pageData.about.title}
				</Heading>
				{pageData.about.live ? (
					<ContactLink
						link={pageData.about.live}
						label="View it live"
						Tag={IoIosRocket}
					/>
				) : (
					<p className="dark:text-white">Offline</p>
				)}
				<p className="dark:text-gray-300 text-primary  text-lg lg:text-xl leading-10  my-4">
					{pageData.about.description}
				</p>
				<LazyWrapper>
					<ProjectBlogSection title="What I Learned" items={pageData.learned} />
					<ProjectBlogSection
						title="Things that we're tough"
						items={pageData.challenges}
					/>
					<ProjectBlogSection
						title="Things I'd do differently next time"
						items={pageData.different}
					/>
				</LazyWrapper>
			</Layout>
			<LazyWrapper>
				<Footer />
			</LazyWrapper>
		</>
	);
}

export async function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), "./data/projectData");
	const filenames = await fs.readdir(postsDirectory);

	const projects = filenames.map(async (filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContents = await fs.readFile(filePath, "utf8");
		const jsonContents = JSON.parse(fileContents);

		return {
			content: jsonContents,
		};
	});

	return {
		props: {
			projects: await Promise.all(projects),
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
