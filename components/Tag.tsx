export function Tag(
	props: React.HTMLAttributes<HTMLSpanElement>,
	{ label }: { label: string }
) {
	return (
		<span
			key={label}
			className="inline-block rounded-full py-2 px-4 bg-dark font-semibold text-white"
			{...props}
		>
			{label}
		</span>
	);
}
