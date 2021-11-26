import FlexContainer from "./FlexContainer";
import Heading from "./Heading";
import { SiGithub, SiLinkedin, SiStackoverflow } from "react-icons/si";
import { FooterButton } from "./Button";
import { IconType } from "react-icons";

export default function Footer() {
	return (
		<footer className="footer bg-dark py-20 px-4 md:px-8 flex flex-col lg:px-60 lg:py-28 relative">
			<div className="flex flex-col">
				<div className="flex flex-col md:flex-row  gap-20 ">
					<div className="flex flex-col justify-between">
						<Heading className="text-2xl text-white font-bold absolute top-10">
							Shayne LaRochelle
						</Heading>
						<h2 className="text-white text-2xl underline">Connect with me!</h2>
						<div className="flex flex-col  gap-8 lg:gap-8  mt-8 justify-between">
							<ContactLink link="#" label="GitHub" Tag={SiGithub} />
							<ContactLink link="#" label="Linkedin" Tag={SiLinkedin} />
							<ContactLink
								link="#"
								label="Stackoverflow"
								Tag={SiStackoverflow}
							/>
						</div>
						<h2 className="absolute bottom-0 text-white">
							Designed & Developed by Shayne LaRochelle
						</h2>
					</div>
					<div className="flex flex-col gap-4 lg:gap-8">
						<h2 className="text-white text-2xl underline">Site Map</h2>
						<div className="flex flex-col">
							<nav className="mt-8">
								<ul className="flex flex-col gap-2">
									<FooterButton href="#">Home</FooterButton>
									<FooterButton href="#">About</FooterButton>
									<FooterButton href="#">Projects</FooterButton>
									<FooterButton href="#">Blog</FooterButton>
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
		<div className="flex gap-2">
			<Tag className="text-2xl text-white" />
			<a href={link} className="text-white">
				{label}
			</a>
		</div>
	);
}
