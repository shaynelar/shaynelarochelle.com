export default function BlogSection({
	title,
	items,
}: {
	title: string;
	items: string[];
}) {
	return (
		<section className="self-stretch">
			<h2 className="dark:text-white text-primary text-2xl md:text-3xl lg:text-4xl font-bold my-10">
				{title}
			</h2>
			{items.map((item) => (
				<ul key={item}>
					<li className="list-disc text-gray-300">
						<p className="dark:text-gray-300 text-primary text-lg lg:text-xl leading-10  my-4">
							{item}
						</p>
					</li>
				</ul>
			))}
		</section>
	);
}
