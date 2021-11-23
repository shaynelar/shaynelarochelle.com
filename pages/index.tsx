import type { NextPage } from "next";
import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

const Home: NextPage = () => {
	return (
		<>
			<NavBar />
			<HeroSection />
		</>
	);
};

export default Home;
