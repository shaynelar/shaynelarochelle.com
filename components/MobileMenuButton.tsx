import { AnchorProps } from "../utils/types";

export default function MobileMenuButton({ children, ...props }: AnchorProps) {
	return (
		<a
			className="text-center  w-full cursor-pointer text-xl font-bold p-4 dark:text-gray-200 text-primary  z-10 border-gray-300 border-b dark:hover:bg-dark hover:bg-light"
			{...props}
		>
			<li className="h-full w-full">{children}</li>
		</a>
	);
}
