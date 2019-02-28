import { writable } from 'svelte/store';
import { noop } from 'svelte/internal';

export const stores = {
	session: process.browser ? writable(false) : frozen(false),
	preloading: writable(false),
	page: process.browser ? writable(null) : frozen(null)
};

export const CONTEXT_KEY = {};

export const preload = () => ({});

function frozen (value) {
	function reset(newValue) {
		value = newValue;
	}

	function subscribe(run) {
		run(value);
		return noop;
	}

	return { reset, subscribe };
}
