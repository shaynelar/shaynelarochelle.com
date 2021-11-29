import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
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
			<Head>
				<title>Shayne LaRochelle</title>
				<meta
					name="description"
					content="Shayne LaRochelle is a Software Engineer experienced in designing,
					developing a deploying full-stack applications."
				/>
				<meta name="author" content="Shayne LaRochelle"></meta>
				<meta
					name="keywords"
					content="React, Typescript, Javascript, Python, HTML, CSS, Software Developer, Software Engineer"
				/>

				<meta charSet="UTF-8" />
				<link rel="shortcut icon" href="/shayneLogo.png" />
			</Head>
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
