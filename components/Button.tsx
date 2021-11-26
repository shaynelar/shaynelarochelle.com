import { motion, MotionProps } from "framer-motion";
import Link from "next/link";
import React from "react";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export function NavButton(props: AnchorProps & MotionProps) {
	return (
		<Link href={props.href!} passHref>
			<motion.a
				{...props}
				className={`inline-block py-2 px-4 lg:py-4 lg:px-8 bg-white  rounded-full nav-button items-center font-semibold ${props.className}`}
				whileTap={{ scale: 0.8 }}
			/>
		</Link>
	);
}

export function MobileMenuButton(props: AnchorProps) {
	return (
		<li className="text-center  w-full cursor-pointer text-xl font-bold p-4 text-white z-10 border-gray-100 border-b hover:bg-dark">
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


export function FooterButton(props: AnchorProps) {
	return (
		<li>
			<a href={props.href!} className="text-gray-200 text-lg hover:text-white">
				{props.children}
			</a>
		</li>
	);
}