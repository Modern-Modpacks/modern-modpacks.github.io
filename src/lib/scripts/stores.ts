import { writable } from "svelte/store"
import { localStorageWritable } from "@babichjacob/svelte-localstorage"
import type { Coordinates } from "./interfaces"

export let scrollY = writable<number>(0) // Scroll position of the page
export let mousePos = writable<Coordinates>({x: 0, y: 0})
export let reducedMotion = writable<boolean>(false)
export let mobile = writable<boolean>(false)
export let sortedLocales = writable<string[]>([])
export let memeLocales = writable<string[]>([])
export let storedLocale = localStorageWritable<string>("locale", "")
export let settingsOpened = writable<boolean>(false)
export let popupOpened = writable<boolean>(false) // Weather the modpack popup is opened
export let contextMenuOpenedBy = writable<number | null>(null) // Weather the mod context menu is opened
export let previousRandomBanner = localStorageWritable<string>("banner", "") // Keeping track of the previous banner so it doesn't get regenerated whenever not needed
export let randomSplash = localStorageWritable<string>("splash", "") // Same as above but for the spalsh