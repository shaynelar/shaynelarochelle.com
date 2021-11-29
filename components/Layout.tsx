type Props<Element extends keyof JSX.IntrinsicElements> = {
	as: Element;
	children: React.ReactNode;
} & JSX.IntrinsicElements[Element];

function Layout<Element extends keyof JSX.IntrinsicElements>({
	as,
	...props
}: Props<Element>) {
	const { className, ...other } = props;
	const Container = as as keyof JSX.IntrinsicElements;
	return (
		//@ts-ignore
		<Container
			//@ts-ignore
			className={`${className} flex justify-center items-center bg-primary`}
			{...other}
		>
			{other.children}
		</Container>
	);
}

Layout.defaultProps = {
	as: "div",
};
export default Layout;
