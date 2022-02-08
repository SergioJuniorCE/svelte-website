import { writable } from "svelte/store";

export const needItems = writable([]);
export const wantItems = writable([]);
export const savingItems = writable([]);