import { createSignal, onCleanup, onMount } from "solid-js";
import { clipboard } from "electron";

const Search = (): React.ReactNode => {
	const [highlightedText, setHighlightedText] = createSignal("");
	let lastClipboardText = "";

	// const updateHighlightedText = () => {
	// 	const currentText =
	// 		clipboard.readText("selection") || clipboard.readText();
	// 	if (currentText !== lastClipboardText) {
	// 		lastClipboardText = currentText;
	// 		setHighlightedText(currentText);
	// 		console.log("New highlighted text detected:", currentText);
	// 	}
	// };

	// let interval: NodeJS.Timeout; // Declare interval variable outside

	// const monitorClipboard = () => {
	// 	interval = setInterval(updateHighlightedText, 1000); // Set the interval
	// };

	// // Clean up the interval when the component unmounts
	// onCleanup(() => clearInterval(interval));

	// // Set up clipboard monitoring when the component mounts
	// onMount(() => {
	// 	monitorClipboard();
	// });

	return (
		<>
			<iframe
				style={{
					width: "100%",
					height: "100%",
				}}
				src={
					highlightedText()
						? `https://jisho.hlorenzi.com/search/${highlightedText()}`
						: "https://jisho.hlorenzi.com/"
				}
				title="Jisho"
			/>
		</>
	);
};

export default Search;
