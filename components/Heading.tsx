function Heading(props: React.HTMLAttributes<HTMLHeadingElement>) {
	const {className, ...otherProps} = props 
	return (
		<h1 className={`font-bold ${className}`} {...otherProps} />
	);
}
export default Heading;
