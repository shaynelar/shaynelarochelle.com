function Heading(props: React.HTMLAttributes<HTMLHeadingElement>) {
	const {className, ...otherProps} = props 
	return (
		<h1 className={`text-3xl my-8 font-bold ${className}`} {...otherProps} />
	);
}
export default Heading;
