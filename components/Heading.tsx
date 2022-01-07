function Heading({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			{...props}
			className={`text-3xl font-bold dark:text-white text-primary ${
				className ? className : ""
			}`}
		/>
	);
}
export default Heading;
