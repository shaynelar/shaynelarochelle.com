import FlexContainer from "./FlexContainer";
import Tag from "./Tag";
interface Props {
	title: string;
	tags: string[];
}

export default function BlogCard({ title, tags }: Props) {
	return (
		<FlexContainer className=" flex-col justify-between p-12 shadow-2xl w-full p-8 rounded-xl bg-gradient-to-bl from-green-400 via-green-500 to-blue-800 max-w-lg md:h-80">
			<h1 className="text-white font-bold text-2xl">{title}</h1>

			<div className="flex gap-2 mt-10">
				{tags.map((tag) => (
					<Tag key={tag} label={tag} color="dark" />
				))}
			</div>
		</FlexContainer>
	);
}
