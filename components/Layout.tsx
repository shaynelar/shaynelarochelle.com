//props should be dynamically type safe for any tag type
type Props<
	Element extends keyof Omit<JSX.IntrinsicElements, "SVGSymbolElement">
> = {
	as?: keyof JSX.IntrinsicElements;
	children: React.ReactNode;
} & JSX.IntrinsicElements[Element];
//default layout element is a div
function Layout<Element extends keyof JSX.IntrinsicElements>({
	as: Container = "div",
	children,
	className,
	...props
}: Props<Element>) {
	return (
		//@ts-ignore FIX
		<Container
			className={`flex justify-center items-center dark:bg-primary bg-white ${
				className || ""
			}`}
			{...props}
		>
			{children}
		</Container>
	);
}

export default Layout;
