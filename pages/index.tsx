import HeroSection from "../components/HeroSection";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { IndexStaticResponse } from "../utils/types";
import { GetStaticPropsResult } from "next";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import TechSection from "../components/TechSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

const Home = ({ data, blogData }: IndexStaticResponse) => {
	return (
		<>
			<Head>
				<title>Shayne LaRochelle | Software Developer</title>
			</Head>
			<NavBar />
			<HeroSection />
			<AboutSection />
			<TechSection />
			<ProjectSection data={data} />
			<BlogSection blogData={blogData} />

			<Footer />
		</>
	);
};

export async function getStaticProps(): Promise<
	GetStaticPropsResult<IndexStaticResponse>
> {
	const data = require("../data/project-card-data.json");
	const blogData = require("../data/blog-data.json");
	return {
		props: {
			data,
			blogData,
		},
	};
}
export default Home;
