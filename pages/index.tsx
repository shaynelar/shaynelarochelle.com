import type { NextPage } from "next"
import HeroSection from "../components/HeroSection";
import dynamic from "next/dynamic";
import AboutSection from "../components/AboutSection";
import Head from "next/head";
import LazyWrapper from "../components/LazyWrapper";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
	const TechSection = dynamic(() => import("../components/TechSection"));
	const ProjectSection = dynamic(() => import("../components/ProjectSection"));
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
				<ProjectSection />
				<BlogSection />
				<Footer />
			</LazyWrapper>
		</>
	);
};

export default Home;
