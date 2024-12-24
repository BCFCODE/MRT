import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
} else {
  console.error("No element with ID 'root' was found in the DOM.");
}
