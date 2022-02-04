import { motion } from "framer-motion";
import dynamic, { LoaderComponent } from "next/dynamic";
import { IconBaseProps, IconType } from "react-icons";

interface Props {
	svg: IconType;
	label: string;
}
const listItem = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};
export default function TechBadge({ svg, label }: Props) {
	return (
		<motion.li
			variants={listItem}
			className="border-2 dark:border-purple-400 border-blue-500 p-4 rounded-2xl m-2 flex  items-center dark:bg-dark bg-white shadow-lg "
		>
			{svg({
				className: `dark:text-blue-300  text-primary text-3xl md:text-4xl lg:text-5xl`,
			})}
			<span className="hidden sm:inline-block dark:text-white text-primary ml-4 lg:text-xl font-semibold">
				{label}
			</span>
		</motion.li>
	);
}

export function Icon({ svg }: { svg: string }) {
	//dynamically import icon if it is passed as prop
	const Icon = dynamic(
		() =>
			import("react-icons/si").then(
				(item) => item[svg]
			) as LoaderComponent<IconBaseProps>
	);

	return (
		<Icon className="dark:text-blue-200 text-primary text-2xl md:text-3xl mx-2" />
	);
}
