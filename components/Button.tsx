import Link from "next/link";
import React from "react";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export function NavButton(props: AnchorProps) {
	return (
		<Link href={props.href!} passHref>
			<a
				{...props}
				className={`inline-block py-2 px-4 lg:py-4 lg:px-8 bg-white  rounded-full nav-button items-center font-semibold ${props.className}`}
			/>
		</Link>
	);
}

export function MobileMenuButton(
	props: React.HTMLAttributes<HTMLAnchorElement>
) {
	return (
		<li className="w-full text-center text-white text-xl p-6 border-b-2 border-gray-300 z-10">
			<a {...props} />
		</li>
	);
}

export function ActionButton(props: React.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			className="p-6 my-6 border-2 rounded-full bg-white button"
			{...props}
		/>
	);
}
