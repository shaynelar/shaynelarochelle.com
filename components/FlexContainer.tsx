function FlexContainer(
	props: React.HTMLAttributes<HTMLDivElement> & { as?: string }
) {
	const { className, ...otherProps } = props
	if (props.as) {
		const Tag = `${otherProps.as}` as keyof JSX.IntrinsicElements;
		
		return (
			<Tag
				className={`flex justify-center items-center ${className}`}
				{...otherProps}
			>
				{otherProps.children}
			</Tag>
		);
	} else {
		return (
			<div
				className={`flex justify-center items-center ${className}`}
				{...otherProps}
			>
				{otherProps.children}
			</div>
		);
	}
}

export default FlexContainer;
