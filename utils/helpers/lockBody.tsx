export default function lockBody() {
	const body = document.getElementsByTagName("body")[0];
	body.classList.toggle("lock-screen");
}
