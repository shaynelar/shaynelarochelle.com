import Layout from "./Layout";
import Tag from "./Tag";
import Lazy from "react-lazyload";
interface Props {
	title: string;
	tags: string[];
	url: string;
}

export default function BlogCard({ title, tags, url }: Props) {
	return (
		<Layout
			as="a"
			href={url}
			target="_blank"
			rel="noreferrer"
			className="blog-card flex-col justify-center sm:justify-between p-12 shadow-2xl w-full p-8 rounded-3xl bg-gradient-to-bl from-green-400 via-green-500 to-blue-800 max-w-lg h-80"
		>
			<h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
				{title}
			</h1>
			<Lazy offset={100}>
				<div className="flex gap-4 mt-10 hidden sm:block">
					{tags.map((tag) => (
						<Tag className="md:mx-4" key={tag} label={tag} color="bg-dark" />
					))}
				</div>
			</Lazy>
		</Layout>
	);
}
