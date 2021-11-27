import Layout from "./Layout";
import Heading from "./Heading";
import { SiGithub, SiLinkedin, SiStackoverflow } from "react-icons/si";
import { FooterButton } from "./Button";
import { IconType } from "react-icons";

export default function Footer() {
	return (
		<footer className="footer bg-dark py-20 px-4 md:px-8 flex flex-col lg:px-20 xl:px-40  lg:py-28 relative">
			<div className="flex flex-col">
				<div className="flex flex-col md:flex-row  gap-20 lg:gap-60 justify-evenly">
					<div className="flex flex-col justify-between">
						<Heading className="text-2xl md:text-3xl text-white font-bold absolute top-10 lg:text-4xl">
							Shayne LaRochelle
						</Heading>
						<h2 className="text-white text-2xl font-semibold mt-10 md:mt-0 lg:text-3xl">
							Connect with me!
						</h2>
						<div className="flex flex-col  gap-8 lg:gap-8  mt-8 justify-between">
							<ContactLink
								link="https://github.com/lockedNLevered"
								label="GitHub"
								Tag={SiGithub}
							/>
							<ContactLink
								link="https://www.linkedin.com/in/shaynelarochelle/"
								label="Linkedin"
								Tag={SiLinkedin}
							/>
							<ContactLink
								link="https://stackoverflow.com/users/12244448/lockednlevered"
								label="Stackoverflow"
								Tag={SiStackoverflow}
							/>
						</div>
						<h2 className="absolute bottom-2 md:bottom-4 text-gray-100 lg:text-lg">
							Designed{" "}
							<span role="img" aria-label="paint">
								🎨{" "}
							</span>
							& Developed{" "}
							<span role="img" aria-label="programmer">
								👩‍💻
							</span>{" "}
							by Shayne LaRochelle{" "}
						</h2>
					</div>
					<div className="flex flex-col gap-4 lg:gap-8">
						<h2 className="text-white text-2xl font-semibold lg:text-3xl">
							Site Map
						</h2>
						<div className="flex flex-col">
							<nav className="mt-8 md:mt-0">
								<ul className="flex flex-col gap-2">
									<FooterButton href="/#nav">Home</FooterButton>
									<FooterButton href="/#about">About</FooterButton>
									<FooterButton href="/#projects">Projects</FooterButton>
									<FooterButton href="/#blog">Blog</FooterButton>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

interface Props {
	Tag: IconType;
	label: string;
	link: string;
}

function ContactLink({ Tag, label, link }: Props) {
	return (
		<a href={link} target="_blank" className="text-white" rel="noreferrer">
			<div className="flex items-center lg:text-lg gap-2 md:gap-4 p-2 px-4 rounded-xl bg-primary shadow-2xl footer-link w-48 md:w-auto">
				<Tag className="text-2xl text-white lg:text-3xl" />
				<span>{label}</span>
			</div>
		</a>
	);
}
