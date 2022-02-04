import BlogCard from "./BlogCard";
import Layout from "./Layout";
import Heading from "./Heading";
import blogData from "../data/blog-data.json";

export default function BlogSection() {
	return (
		<Layout id="blog" as="article" className="flex flex-col min-h-screen  p-4">
			<Heading className="text-5xl lg:text-6xl text-white font-semibold mb-8 lg:my-12">
				Blog
			</Heading>
			{blogData.map(({ title, tags, url }) => (
				<BlogCard key={title} title={title} tags={tags} url={url} />
			))}
		</Layout>
	);
}
