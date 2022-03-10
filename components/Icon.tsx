import dynamic, { LoaderComponent } from "next/dynamic";
import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";
import { IconType } from "react-icons/lib";
import {
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiGraphql,
	SiAmazonaws,
	SiMysql,
	SiApollographql,
	SiStyledcomponents,
	SiPostgresql,
	SiPython,
	SiDjango,
	SiRedis,
	SiDocker,
	SiScikitlearn,
	SiJupyter,
	SiPandas,
	SiTensorflow,
	SiRust,
	SiWebassembly,
	SiAngular,
} from "react-icons/si";
export default function Icon({ svg }: { svg: string }) {
	// NOTE: this was the original import method,
	// but  bundle size was drastically reduced by explitily
	// importing the icons all at once
	// dynamically import icon if it is passed as prop (1.3mb gzipped -> 17.8kb gzipped)
	// const Icon = dynamic(
	// 	() =>
	// 		import("react-icons/si").then(
	// 			(item) => item[svg]
	// 		) as LoaderComponent<IconBaseProps>
	// );

	//build an object of all icons
	const icons = {
		SiRust,
		SiAngular,
		SiWebassembly,
		SiTypescript,
		SiReact,
		SiNextdotjs,
		SiNodedotjs,
		SiGraphql,
		SiAmazonaws,
		SiMysql,
		SiApollographql,
		SiStyledcomponents,
		SiPostgresql,
		SiPython,
		SiDjango,
		SiRedis,
		SiDocker,
		SiScikitlearn,
		SiJupyter,
		SiPandas,
		SiTensorflow,
	};
	//get the icon that matches the string prop and cast to correct type
	const Icon = icons[svg as keyof IconType] as ComponentType<IconBaseProps>;

	return (
		<Icon className="dark:text-blue-100 text-primary text-2xl md:text-3xl mx-2" />
	);
}
