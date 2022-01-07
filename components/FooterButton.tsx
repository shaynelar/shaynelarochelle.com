import Link from "next/link";
import { AnchorProps } from "../utils/types";

export default function FooterButton({ href, children }: AnchorProps) {
	return (
		<li>
			<Link href={href}>
				<a
					href={href}
					className="dark:text-gray-300 text-primary text-lg dark:hover:text-white hover:text-dark md:text-xl lg:text-2xl"
				>
					{children}
				</a>
			</Link>
		</li>
	);
}
