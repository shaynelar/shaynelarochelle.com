interface Props {
	title: string;
	tags: string[];
}

export default function BlogCard({ title, tags }: Props) {
	return (
		<div className="shadow-2xl w-full p-8 rounded-xl bg-gradient-to-bl from-green-400 via-green-500 to-blue-800 max-w-lg">
			<h1 className="text-white font-bold text-2xl">{title}</h1>

			<div className="flex gap-2 mt-10">
				{tags.map((tag) => (
					<span
						key={tag}
						className="inline-block rounded-full py-2 px-4 bg-dark font-semibold text-white"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
}
