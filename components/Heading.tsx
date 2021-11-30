function Heading(props: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			{...props}
			className={`text-3xl font-bold dark:text-white text-primary ${
				props.className ? props.className : ""
			}`}
		/>
	);
}
export default Heading;
