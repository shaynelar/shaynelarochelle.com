import dynamic, { LoaderComponent } from "next/dynamic";
import { IconBaseProps } from "react-icons";
export default function Icon({ svg }: { svg: string }) {
	//dynamically import icon if it is passed as prop
	const Icon = dynamic(
		() =>
			import("react-icons/si").then(
				(item) => item[svg]
			) as LoaderComponent<IconBaseProps>
	);

	return (
		<Icon className="dark:text-blue-100 text-primary text-2xl md:text-3xl mx-2" />
	);
}
