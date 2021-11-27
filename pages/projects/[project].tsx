import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import path from "path";
import { promises as fs } from "fs";

const Project = ({ projects }: any) => {
	const router = useRouter();
	const { project } = router.query;

	const pageData = projects[0].content.filter(
		(content) => content.about.slug === project
	)[0];

	return (
		<>
			<NavBar />

			<Layout as="section">
				<Heading className="text-white">{pageData.about.title}</Heading>
			</Layout>
			<Footer />
		</>
	);
};

export async function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), "./project");
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

export default Project;
