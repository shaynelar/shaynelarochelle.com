import Link from "next/link";
import { AnchorProps } from "../utils/types";

export default function NavButton({ href, className, ...props }: AnchorProps) {
	return (
		<li className="hidden md:block m-2 ">
			<Link href={href} passHref>
				<a
					className={`nav-button inline-block p-2 md:px-4 lg:py-4 lg:px-8 dark:text-gray-300 text-dark text-xl dark:hover:text-white nav-button items-center font-semibold  ${
						className ?? ""
					}`}
					{...props}
				/>
			</Link>
		</li>
	);
}
