import { error } from '@sveltejs/kit';

export function load() {
	throw error(418, 'This page is currently under construction! Come back later!');
}
