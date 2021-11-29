type Props<Element extends keyof JSX.IntrinsicElements> = {
	as?: keyof JSX.IntrinsicElements;
	children: React.ReactNode;
} & JSX.IntrinsicElements[Element];

function Layout<Element extends keyof JSX.IntrinsicElements>({
	as: Container = "div",
	children,
	className,
	...props
}: Props<Element>) {
	return (
		//@ts-ignore
		<Container
			{...props}
			className={`flex justify-center items-center bg-primary ${
				className ? className : ""
			}`}
		>
			{children}
		</Container>
	);
}

export default Layout;
