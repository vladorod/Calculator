import { initSubscribers } from "./subscribers.ts";
import { initListeners } from "./listeners.ts";

export const initView = () => {
    initSubscribers()
    initListeners()
}