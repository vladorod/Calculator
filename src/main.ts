// import "normalize.css";
import "./style.css";
// import "./utils/code.ts";
import { initSubscribers } from "./view/subscribers.ts";
import { initListeners } from "./view/listeners.ts";

export const initView = () => {
    initSubscribers()
    initListeners()
}