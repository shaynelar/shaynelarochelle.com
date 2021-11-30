import { AnchorProps } from "../utils/types";

export default function MobileMenuButton(props: AnchorProps) {
	return (
		<li className="text-center  w-full cursor-pointer text-xl font-bold p-4 text-gray-200 z-10 border-dark border-b hover:bg-primary">
			<a {...props} />
		</li>
	);
}
