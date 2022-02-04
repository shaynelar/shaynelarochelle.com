import type { NextPage } from "next";
import React from "react";
import CustomHead from "../components/Head";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

import Footer from "../components/Footer";
import loadable from "@loadable/component";
const Home: NextPage = () => {
	const TechSection = loadable(() => import("../components/TechSection"));
	const ProjectSection = loadable(() => import("../components/ProjectSection"));
	const BlogSection = loadable(() => import("../components/BlogSection"));

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
