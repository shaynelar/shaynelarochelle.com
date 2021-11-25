import { motion, MotionProps } from "framer-motion";
import Link from "next/link";
import React from "react";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export function NavButton(props: AnchorProps & MotionProps) {
	return (
		<Link href={props.href} passHref>
			<motion.a
				{...props}
				className={`inline-block py-2 px-4 lg:py-4 lg:px-8 bg-white  rounded-full nav-button items-center font-semibold ${props.className}`}
				whileTap={{ scale: 0.8 }}
			/>
		</Link>
	);
}

export function MobileMenuButton(
	props: React.HTMLAttributes<HTMLAnchorElement>
) {
	return (
		<motion.li
			whileTap={{ scale: 0.95 }}
			className="mx-4 text-center text-dark rounded-xl cursor-pointer text-xl font-bold p-6 bg-white  z-10"
		>
			<a {...props} />
		</motion.li>
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
