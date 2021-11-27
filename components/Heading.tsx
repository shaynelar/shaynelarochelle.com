function Heading(props: React.HTMLAttributes<HTMLHeadingElement>) {
	const { className, ...otherProps } = props;
	return <h1 className={`${className} text-3xl font-bold `} {...otherProps} />;
}
export default Heading;
