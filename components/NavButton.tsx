import { AnchorProps } from "../utils/types";
import Link from "next/link";
import { motion, MotionProps } from "framer-motion";

export default function NavButton(props: AnchorProps & MotionProps) {
	return (
		<Link href={props.href} passHref>
			<motion.a
				{...props}
				className={`inline-block p-2 md:px-4 lg:py-4 lg:px-8 dark:text-gray-300 text-dark text-xl nav-button items-center font-semibold  ${
					props.className ? props.className : ""
				}`}
				whileTap={{ scale: 0.8 }}
			/>
		</Link>
	);
}
