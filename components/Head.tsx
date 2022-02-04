import React from "react";
import Head from "next/head";

export default function CustomHead() {
	return (
		<Head>
			<title>Shayne LaRochelle | Software Developer</title>
			<meta
				property="og:title"
				name="title"
				content="Shayne LaRochelle Software Engineer"
			/>
			<meta property="og:type" content="website" />
			<meta
				property="og:description"
				name="description"
				content="Shayne LaRochelle is a Software Engineer experienced in designing,
					developing and deploying full-stack applications."
			/>
			<meta property="og:author" name="author" content="Shayne LaRochelle" />
			<meta
				property="og:keywords"
				name="keywords"
				content="React, TypeScript, JavaScript, Node.js, Software Developer, Front end Developer, Rust, Python, HTML, CSS, Software Developer, Software Engineer"
			/>

			<meta charSet="UTF-8" />
			<link rel="shortcut icon" href="/shayneLogo.png" />
		</Head>
	);
}
