import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import path from "path";
import { promises as fs } from "fs";
import { IProjects } from "../../utils/types";
import ProjectStackSection from "../../components/ProjectStackSection";
import NavButton from "../../components/NavButton";
import ProjectBlogSection from "../../components/ProjectBlogSection";

export default function Project({ projects }: { projects: IProjects[] }) {
	const router = useRouter();
	const { project } = router.query;
	const pageData = projects[0].content.filter(
		(content) => content.about.slug === project
	)[0];
	return (
		<>
			<NavBar />
			<Layout
				as="section"
				className="min-h-screen  p-4 md:py-8 lg:py-14 flex-col flex gap-4 lg:px-44 xl:px-60 md:px-24 px-10 sm:px-14 "
			>
				<Heading className="dark:text-white text-primary text-primary lg:text-5xl">
					{pageData.about.title}
				</Heading>
				{pageData.about.url ? (
					<NavButton target="_blank" href={`https://${pageData.about.url}`}>
						{pageData.about.url}
					</NavButton>
				) : (
					<p>Offline</p>
				)}
				<p className="dark:text-gray-300 text-primary  text-lg lg:text-xl leading-10  my-4">
					{pageData.about.description}
				</p>
				<div className="dark:bg-dark bg-light rounded-xl p-4 flex flex-col gap-6 w-full items-center">
					<ProjectStackSection
						title="Client"
						tech={pageData.about.tech.client}
					/>
					<ProjectStackSection
						title="Server"
						tech={pageData.about.tech.server}
					/>
					<ProjectStackSection
						title="Deployment"
						tech={pageData.about.tech.deployment}
					/>
				</div>
				<ProjectBlogSection title="What I Learned" items={pageData.learned} />
				<ProjectBlogSection
					title="Things that we're tough"
					items={pageData.challenges}
				/>
				<ProjectBlogSection
					title="Things I'd do differently next time"
					items={pageData.different}
				/>
			</Layout>
			<Footer />
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
			{ params: { project: "friendsofjapan" } }, // See the "paths" section below
		],
		fallback: false,
	};
}
