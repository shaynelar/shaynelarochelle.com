type Props = {
	as?: keyof JSX.IntrinsicElements;
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLOrSVGElement>;

function Layout({ as: Container = "div", children, ...props }: Props) {
	return (
		<Container
			{...props}
			className={`${props.className} flex justify-center items-center bg-primary`}
		>
			{children}
		</Container>
	);
}

export default Layout;
