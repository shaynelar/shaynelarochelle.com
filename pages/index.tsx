import type { NextPage } from "next";
import React from "react";
import CustomHead from "../components/Head";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
	const TechSection = dynamic(() => import("../components/TechSection"));
	const AboutSection = dynamic(() => import("../components/AboutSection"));
	const ProjectSection = dynamic(() => import("../components/ProjectSection"));
	const BlogSection = dynamic(() => import("../components/BlogSection"));
	const Footer = dynamic(() => import("../components/Footer"));
	return (
		<>
			<CustomHead />
			<NavBar />
			<HeroSection />
			<AboutSection />
			<TechSection />
			<ProjectSection />
			<BlogSection />
			<Footer />
		</>
	);
};

export default Home;
