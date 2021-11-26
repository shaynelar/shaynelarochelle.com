import FlexContainer from "./FlexContainer";
import Tag from "./Tag";
interface Props {
	title: string;
	tags: string[];
}

export default function BlogCard({ title, tags }: Props) {
	return (
		
		<FlexContainer as="a" href="#" className="blog-card flex-col justify-center sm:justify-between p-12 shadow-2xl w-full p-8 rounded-3xl bg-gradient-to-bl from-green-400 via-green-500 to-blue-800 max-w-lg h-80">
			<h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
				{title}
			</h1>

			<div className="flex gap-2 md:gap-4 mt-10 hidden sm:block">
				{tags.map((tag) => (
					<Tag className="md:mx-4" key={tag} label={tag} color="dark" />
				))}
			</div>
		</FlexContainer>
	);
}
