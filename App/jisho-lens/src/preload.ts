// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { clipboard } from "electron";

window.electronAPI = {
	readClipboard: () => clipboard.readText(),
	writeClipboard: (text) => clipboard.writeText(text),
};
