import dynamic, { LoaderComponent } from "next/dynamic";
import { IconBaseProps, IconType } from "react-icons";

interface Props {
	svg: IconType;
	label: string;
}

export default function TechBadge({ svg, label }: Props) {
	return (
		<div className="border-2  border-purple-400 p-4 rounded-2xl m-2 flex  items-center bg-dark shadow-2xl ">
			{svg({ className: "text-blue-200 text-3xl md:text-4xl lg:text-5xl" })}
			<span className="hidden sm:inline-block text-white ml-4 lg:text-xl lg">
				{label}
			</span>
		</div>
	);
}

export function Icon({ svg }: { svg: string }) {
	const Icon = dynamic(
		() =>
			import("react-icons/si").then(
				(item) => item[svg]
			) as LoaderComponent<IconBaseProps>
	);

	return <Icon className="text-blue-200 text-2xl md:text-3xl mx-2" />;
}
