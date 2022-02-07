import HeroSection from "../components/HeroSection";
import dynamic from "next/dynamic";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { ProjectCardData } from "../utils/types";
import { GetStaticPropsResult } from "next";
import LazyWrapper from "../components/LazyWrapper";
import AboutSection from "../components/AboutSection";

const Home = ({ data }: ProjectCardData) => {
	const ProjectSection = dynamic(() => import("../components/ProjectSection"));
	const TechSection = dynamic(() => import("../components/TechSection"));
	const BlogSection = dynamic(() => import("../components/BlogSection"));
	const Footer = dynamic(() => import("../components/Footer"));

	return (
		<>
			<Head>
				<title>Shayne LaRochelle | Software Developer</title>
			</Head>
			<NavBar />
			<HeroSection />
			<AboutSection />
			<LazyWrapper>
				<TechSection />
				<ProjectSection data={data} />
				<BlogSection />
				<Footer />
			</LazyWrapper>
		</>
	);
};

export async function getStaticProps(): Promise<
	GetStaticPropsResult<ProjectCardData>
> {
	const data = require("../data/project-card-data.json");
	return {
		props: {
			data,
		},
	};
}
export default Home;
