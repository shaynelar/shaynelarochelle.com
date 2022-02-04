import React from "react";
import NavButton from "./NavButton";
import Heading from "./Heading";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
	return (
		<header
			id="nav"
			className="flex justify-between p-4 md:px-6 lg:px-10 xl:px-20 items-center dark:bg-primary bg-white"
		>
			<Link href="/#nav" passHref>
				<Heading className="text-xl font-bold dark:text-white text-primary cursor-pointer">
					Shayne LaRochelle
				</Heading>
			</Link>
			<div className="flex items-center gap-4">
				<nav>
					<ul className="flex">
						<NavButton href="/#about">About</NavButton>
						<NavButton href="/#projects">Projects</NavButton>
						<NavButton href="/#blog">Blog</NavButton>
					</ul>
					<MobileMenu />
				</nav>
				<ThemeToggle />
			</div>
		</header>
	);
}
