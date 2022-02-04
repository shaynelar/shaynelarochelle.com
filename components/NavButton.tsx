import Link from "next/link";
import { m as motion, MotionProps } from "framer-motion";
import { AnchorProps } from "../utils/types";

export default function NavButton({
	href,
	className,
	...props
}: AnchorProps & MotionProps) {
	return (
		<li className="hidden md:block m-2 ">
			<Link href={href} passHref>
				<motion.a
					className={`nav-button inline-block p-2 md:px-4 lg:py-4 lg:px-8 dark:text-gray-300 text-dark text-xl dark:hover:text-white nav-button items-center font-semibold  ${
						className ?? ""
					}`}
					whileTap={{ scale: 0.8 }}
					{...props}
				/>
			</Link>
		</li>
	);
}
