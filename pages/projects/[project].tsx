import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import path from "path";
import { promises as fs } from "fs";
import { IProjects } from "../../utils/types";
import TechBadge, { Icon } from "../../components/TechBadge";
import { IconType } from "react-icons";

const Project = ({ projects }: { projects: IProjects[] }) => {
	const router = useRouter();
	const { project } = router.query;

	const pageData = projects[0].content.filter(
		(content) => content.about.slug === project
	)[0];
	console.log(pageData.learned);
	return (
		<>
			<NavBar />

			<Layout
				as="section"
				className="min-h-screen bg-primary p-4 flex-col flex  xl:px-60 md:px-10 px-4"
			>
				<Heading className="text-white">{pageData.about.title}</Heading>
				<p>{pageData.about.description}</p>
				<StackSection title="Client" tech={pageData.about.tech.client} />
				<StackSection title="Client" tech={pageData.about.tech.server} />
				<StackSection title="Client" tech={pageData.about.tech.deployment} />
				<BlogSection title="What I Learned" items={pageData.learned} />
				<BlogSection
					title="Things that we're tough"
					items={pageData.challenges}
				/>
				<BlogSection
					title="Things I'd do differently next time"
					items={pageData.different}
				/>
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

function StackSection({
	title,
	tech,
}: {
	title: string;
	tech: { name: string; icon: string }[];
}) {
	return (
		<div className="flex flex-col items-center gap-2">
			<h2 className="text-white text-xl">{title}</h2>
			<div className="flex justify-between">
				{tech.map((item, id) => (
					<Icon key={item.name + id} svg={item.icon} />
				))}
			</div>
		</div>
	);
}

function BlogSection({ title, items }: { title: string; items: string[] }) {
	return (
		<section>
			<h2 className="text-white text-2xl lg:text-4xl">{title}</h2>
			{items.map((item) => (
				<ul key={item}>
					<li>
						<p className="text-gray-200">{item}</p>
					</li>
				</ul>
			))}
		</section>
	);
}
