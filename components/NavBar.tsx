import React from "react";
import NavButton from "./NavButton";
import Heading from "./Heading";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
	return (
		<header
			id="nav"
			className="flex justify-between p-4 md:px-6 lg:px-10 items-center dark:bg-primary bg-white"
		>
			<Heading className="text-xl font-bold dark:text-white text-primary">
				Shayne LaRochelle
			</Heading>
			<nav>
				<ul className="flex">
					<NavButton href="/#nav">Home</NavButton>
					<NavButton href="/#about">About</NavButton>
					<NavButton href="/#projects">Projects</NavButton>
					<NavButton href="/#blog">Blog</NavButton>
				</ul>
				<MobileMenu />
			</nav>
			<ThemeToggle />
		</header>
	);
}
