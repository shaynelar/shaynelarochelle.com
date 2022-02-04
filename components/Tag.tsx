export default function Tag({
	label,
	color,
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement> & {
	label: string;
	color: string;
}) {
	return (
		<span
			key={label}
			{...props}
			className={`${color} ${className} lg:text-lg mx-1 inline-block text-center rounded-md py-2 px-4 font-semibold text-white self-start`}
		>
			#{label}
		</span>
	);
}
