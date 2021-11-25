import FlexContainer from "./FlexContainer";
import Heading from "./Heading";
import { SiGithub, SiLinkedin, SiStackoverflow } from "react-icons/si";

export default function Footer() {
	return (
		<FlexContainer as="footer" className="footer items-start bg-dark justify-between px-8 relative">
			<div>
				<Heading className="text-3xl text-white my-8 font-bold">
					Shayne LaRochelle
				</Heading>
				<h2 className="text-white">Conntect with me!</h2>
				<div className="flex gap-4 mt-4">
					<SiGithub className="text-2xl text-white" />
					<SiLinkedin className="text-2xl text-white" />
					<SiStackoverflow className="text-2xl text-white" />
				</div>
			</div>
            <h2 className="absolute bottom-0 text-white">Designed & Developed by Shayne LaRochelle</h2>
		</FlexContainer>
	);
}
 