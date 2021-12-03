import { AnchorProps } from "../utils/types";
import Link from "next/link";
import { motion, MotionProps } from "framer-motion";

export default function NavButton(props: AnchorProps & MotionProps) {
	return (
		<li className="hidden md:block m-2 ">
			<Link href={props.href} passHref>
				<motion.a
					className={`inline-block p-2 md:px-4 lg:py-4 lg:px-8 dark:text-gray-300 text-dark text-xl dark:hover:text-white nav-button items-center font-semibold  ${
						props.className ?? ""
					}`}
					whileTap={{ scale: 0.8 }}
					{...props}
				/>
			</Link>
		</li>
	);
}
