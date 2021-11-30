export default function Tag(
	props: React.HTMLAttributes<HTMLSpanElement> & {
		label: string;
		color: string;
	}
) {
	return (
		<span
			key={props.label}
			{...props}
			className={`${props.color} ${props.className} lg:text-lg mx-1 inline-block text-center rounded-full py-2 px-4 font-semibold text-white `}
		>
			#{props.label}
		</span>
	);
}
