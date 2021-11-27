import React from "react";
import BlogCard from "./BlogCard";
import Layout from "./Layout";
import Heading from "./Heading";
import blogData from "../blog-data.json";

export default function BlogSection() {
	return (
		<Layout
			id="blog"
			as="article"
			className="flex flex-col min-h-screen bg-primary p-4"
		>
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
