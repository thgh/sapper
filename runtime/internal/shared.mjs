import { writable } from 'svelte/store';

export const stores = {
	session: writable(false),
	preloading: writable(false),
	page: writable(null)
};

export const CONTEXT_KEY = {};

export const preload = () => ({});