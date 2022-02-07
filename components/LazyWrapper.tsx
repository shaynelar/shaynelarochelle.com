import React from "react";
import LazyLoad from "react-lazyload";
interface Props {
	children: React.ReactNode;
}

export default function LazyWrapper({ children }: Props) {
	return <LazyLoad height={200} debounce={350} once>{children}</LazyLoad>;
}
