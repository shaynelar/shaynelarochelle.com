import React from "react";
import BlogCard from "./BlogCard";
import FlexContainer from "./FlexContainer";
import Heading from "./Heading";
import blogData from "../blog-data.json";

export default function BlogSection() {
	return (
		<FlexContainer
			id="blog"
			as="article"
			className="flex flex-col min-h-screen bg-primary p-4"
		>
			<Heading className="text-5xl text-white my-10">Blog</Heading>
			{blogData.map((post) => (
				<BlogCard key={post.title} title={post.title} tags={post.tags} />
			))}
		</FlexContainer>
	);
}
