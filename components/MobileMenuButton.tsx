import { AnchorProps } from "../utils/types";

export default function MobileMenuButton(props: AnchorProps) {
	return (
		<li className="text-center  w-full cursor-pointer text-xl font-bold p-4 dark:text-gray-200 text-primary  z-10 border-dark border-b dark:hover:bg-primary hover:bg-light">
			<a {...props} />
		</li>
	);
}
