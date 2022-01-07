import React from "react";
import blogData from "../data/blog-data.json";
import BlogCard from "./BlogCard";
import Layout from "./Layout";
import Heading from "./Heading";


export default function BlogSection() {
	return (
		<Layout id="blog" as="article" className="flex flex-col min-h-screen p-4">
			<Heading className="text-5xl lg:text-6xl text-white font-semibold mb-8 lg:my-12">
				Blog
			</Heading>
			{blogData.map((post) => (
				<BlogCard
					key={post.title}
					title={post.title}
					tags={post.tags}
					url={post.url}
				/>
			))}
		</Layout>
	);
}
