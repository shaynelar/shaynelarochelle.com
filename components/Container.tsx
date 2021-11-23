const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex justify-center items-center hero-height">
			{children}
		</div>
	);
};

export default Container;
