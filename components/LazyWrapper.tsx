import React from "react";
import LazyLoad from "react-lazyload";
interface Props {
	children: React.ReactNode;
}

export default function LazyWrapper({ children }: Props) {
	return <LazyLoad debounce={300} once>{children}</LazyLoad>;
}
