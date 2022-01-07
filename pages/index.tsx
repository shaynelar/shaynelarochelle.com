import type { NextPage } from "next";
import React from "react";
import CustomHead from "../components/Head";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechSection from "../components/TechSection";
import ProjectSection from "../components/ProjectSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";


const Home: NextPage = () => {
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
