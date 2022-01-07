import { IconType } from "react-icons";

interface Props {
	Tag: IconType;
	label: string;
	link: string;
}

export default function ContactLink({ Tag, label, link }: Props) {
	return (
		<a
			href={link}
			target="_blank"
			className="dark:text-white text-primary"
			rel="noreferrer"
		>
			<div className="flex items-center lg:text-lg gap-2 md:gap-4 p-2 px-4 rounded-xl dark:bg-primary dark:hover:border-light bg-white shadow-lg dark:footer-link-dark footer-link-light w-48 md:w-auto">
				<Tag className="text-2xl dark:text-white text-primary lg:text-3xl" />
				<span>{label}</span>
			</div>
		</a>
	);
}