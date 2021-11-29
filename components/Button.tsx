import { motion, MotionProps } from "framer-motion";
import Link from "next/link";
import React from "react";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export function NavButton(props: AnchorProps & MotionProps) {
	return (
		<Link href={props.href!} passHref>
			<motion.a
				{...props}
				className={`inline-block py-2 px-4 lg:py-4 lg:px-8 text-gray-300 text-xl nav-button items-center font-semibold  ${props.className}`}
				whileTap={{ scale: 0.8 }}
			/>
		</Link>
	);
}

export function MobileMenuButton(props: AnchorProps) {
	return (
		<li className="text-center  w-full cursor-pointer text-xl font-bold p-4 text-gray-200 z-10 border-dark border-b hover:bg-primary">
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

export function FooterButton(props: AnchorProps & Required<{ href: string }>) {
	return (
		<li>
			<Link href={props.href}>
				<a
					href={props.href}
					className="text-gray-300 text-lg hover:text-white md:text-xl lg:text-2xl"
				>
					{props.children}
				</a>
			</Link>
		</li>
	);
}
