import { Menu, MenuButton } from "@reach/menu-button";
import dynamic from "next/dynamic";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import lockBody from "../utils/helpers/lockBody";

export default function MobileMenu() {
	const MobileMenuList = dynamic(() => import("./MobileMenuList"));
	return (
		<div className="md:hidden">
			<Menu>
				{({ isExpanded }) => {
					return (
						<>
							<MenuButton
								onMouseDown={lockBody}
								className=" inline-flex items-center justify-center p-4  dark:bg-dark bg-light dark:text-gray-100 text-primary rounded-full"
							>
								{isExpanded ? <IoMdClose /> : <GiHamburgerMenu />}
							</MenuButton>
							<MobileMenuList />
						</>
					);
				}}
			</Menu>
		</div>
	);
}
