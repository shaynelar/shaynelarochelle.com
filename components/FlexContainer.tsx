function FlexContainer(
	props: React.HTMLAttributes<HTMLDivElement> & { as?: string }
) {
	if (props.as) {
		const Tag = `${props.as}` as keyof JSX.IntrinsicElements;
		return (
			<Tag className={`flex justify-center items-center ${props.className}`}>
				{props.children}
			</Tag>
		);
	} else {
		return (
			<div className={`flex justify-center items-center ${props.className}`}>
				{props.children}
			</div>
		);
	}
}

export default FlexContainer;
