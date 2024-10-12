import { createRoot } from "react-dom/client";
import Search from "./components/Search/Search";

const rootElement = document.getElementById("root"); // Ensure this matches your HTML
const root = createRoot(rootElement); // Create the root

// Render the Search component
root.render(<Search />);
