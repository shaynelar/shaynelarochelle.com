import Icon from "./Icon";

export default function StackSection({
	title,
	tech,
}: {
	title: string;
	tech: { name: string; icon: string }[];
}) {
	return (
		<div className="flex flex-col w-full  gap-2">
			<div className="flex  items-center w-full">
				<h2 className="dark:text-white w-1/2 text-primary text-2xl">{title}</h2>
				<div className="flex justify-self-center">
					{tech.map((item, id) => (
						<Icon key={item.name + id} svg={item.icon} />
					))}
				</div>
			</div>
		</div>
	);
}
