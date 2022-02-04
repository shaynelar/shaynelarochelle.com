import type { NextPage } from "next";
import React from "react";
import HeroSection from "../components/HeroSection";
import dynamic from "next/dynamic";
// import NavBar from "../components/NavBar";
import Head from "next/head";

const Home: NextPage = () => {
	const TechSection = dynamic(() => import("../components/TechSection"));
	const AboutSection = dynamic(() => import("../components/AboutSection"));
	const ProjectSection = dynamic(() => import("../components/ProjectSection"));
	const BlogSection = dynamic(() => import("../components/BlogSection"));
	// const Footer = dynamic(() => import("../components/Footer"));
	return (
		<>
			<Head>
				<title>Shayne LaRochelle | Software Developer</title>
			</Head>
			{/* <NavBar /> */}
			<HeroSection />
			<AboutSection />
			<TechSection />
			<ProjectSection />
			<BlogSection />
			{/* <Footer /> */}
		</>
	);
};

export default Home;
