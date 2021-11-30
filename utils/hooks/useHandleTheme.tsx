import { useEffect, useState } from "react";

export default function useHandleTheme() {
	const [isDark, setIsDark] = useState(true);
	useEffect(() => {
		setIsDark((dark) => !dark);
		localStorage.setItem("isDark", JSON.stringify(isDark));
		const html = document.querySelector("html");
		html?.classList.toggle("dark");
	}, []);

	return { isDark: isDark };
}
