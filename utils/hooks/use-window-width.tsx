import { useEffect, useState } from "react";

export default function useWindowWidth() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState<number | undefined>(undefined);
	useEffect(() => {
		function handleResize() {
			setWindowSize(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowSize;
}
