type Props<Element extends keyof JSX.IntrinsicElements> = {
	as?: keyof JSX.IntrinsicElements;
	children: React.ReactNode;
} & JSX.IntrinsicElements[Element];

function Layout<Element extends keyof JSX.IntrinsicElements>({
	as: Container = "div",
	children,
	...props
}: Props<Element>) {
	return (
		//@ts-ignore
		<Container
			{...props}
			className={`${props.className} flex justify-center items-center bg-primary`}
		>
			{children}
		</Container>
	);
}

export default Layout;
