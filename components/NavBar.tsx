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
					<li className="hidden md:block m-2 ">
						<NavButton href="/#nav">Home</NavButton>
					</li>
					<li className="hidden md:block m-2">
						<NavButton href="/#about">About</NavButton>
					</li>
					<li className="hidden md:block m-2">
						<NavButton href="/#projects">Projects</NavButton>
					</li>
					<li className="hidden md:block m-2">
						<NavButton href="/#blog">Blog</NavButton>
					</li>
				</ul>

				<MobileMenu />
			</nav>
			<ThemeToggle />
		</header>
	);
}
