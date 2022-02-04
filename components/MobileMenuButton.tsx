import { motion } from "framer-motion";
import { AnchorProps } from "../utils/types";
const listItem = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

export default function MobileMenuButton({
	children,
	...props
}: Pick<AnchorProps, "children" | "href" | "onClick">) {
	return (
		<motion.a
			variants={listItem}
			className="text-center  w-full cursor-pointer text-xl font-bold p-4 dark:text-gray-200 text-primary  z-10 border-gray-300 border-b dark:hover:bg-dark hover:bg-light"
			{...props}
		>
			<li className="h-full w-full">{children}</li>
		</motion.a>
	);
}
