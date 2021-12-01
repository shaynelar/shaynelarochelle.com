import { Icon } from "./TechBadge";

export default function StackSection({
	title,
	tech,
}: {
	title: string;
	tech: { name: string; icon: string }[];
}) {
	return (
		<div className="flex flex-col  gap-2">
			<div className="flex justify-between items-center">
				<h2 className="dark:text-white text-primary text-2xl">{title}</h2>
				{tech.map((item, id) => (
					<Icon key={item.name + id} svg={item.icon} />
				))}
			</div>
		</div>
	);
}
