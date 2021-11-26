import React from "react";
import { NavButton } from "./Button";
import Heading from "./Heading";
import MobileMenu from "./MobileMenu";

function NavBar() {
	return (
		<header id="nav" className="flex justify-between p-4 md:px-6 lg:px-10 items-center bg-primary">
			<Heading className="text-2xl font-bold text-white">
				Shayne LaRochelle
			</Heading>
			<nav>
				<ul className="flex">
					<li className="hidden md:block m-2 ">
						<NavButton href="#nav">Home</NavButton>
					</li>
					<li className="hidden md:block m-2">
						<NavButton href="#about">About</NavButton>
					</li>
					<li className="hidden md:block m-2">
						<NavButton href="#projects">Projects</NavButton>
					</li>
					<li className="hidden md:block m-2">
						<NavButton href="#blog">Blog</NavButton>
					</li>
					<li className="hidden md:block m-2">
						<NavButton href="#">Resume</NavButton>
					</li>
				</ul>
				<MobileMenu />
			</nav>
		</header>
	);
}
export default NavBar;
