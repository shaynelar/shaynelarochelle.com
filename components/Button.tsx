import Link from "next/link";
import React from "react";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
const NavButton = (props: AnchorProps) => {
	return (
		<Link href={props.href!} passHref>
			<a
				className="inline-block p-2 px-4 bg-primary border border-gray-900 rounded-sm button"
				{...props}
			/>
		</Link>
	);
};
export { NavButton };

const MobileMenuButton = (props: React.HTMLAttributes<HTMLAnchorElement>) => {
	return (
		<li className="w-full text-center p-4 border-b-2 border-gray-300 z-10">
			<a {...props} />
		</li>
	);
};
export { MobileMenuButton };
