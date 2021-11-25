import type { NextPage } from "next";
import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechSection from "../components/TechSection";

const Home: NextPage = () => {
	return (
		<>
			<NavBar />
			<HeroSection />
			<AboutSection />
			<TechSection />
		</>
	);
};

export default Home;
