import { DateTime } from 'luxon';
import Discord from '$lib/components/icons/Discord.svelte';
import Instagram from '$lib/components/icons/Instagram.svelte';

// The steam game id, currently set to the id from "chaos"
export const steam_game_id = '1230410';

export interface Update {
	title: string;
	date: DateTime;
	version: string;
	description: string;
}

export const updates: Update[] = [
	{
		title: 'Alphas',
		date: DateTime.fromISO('2024-02-10'),
		version: 'alphas',
		description: 'Playtester only builds! No major public releases until this point.'
	}
];

export const links = [
	{
		name: 'Discord',
		icon: Discord,
		url: 'https://discord.gg/vBz8uYgdfr'
	},
	{
		name: 'Instagram',
		icon: Instagram,
		url: 'https://www.instagram.com/plebis_online/'
	}
	// Hidden due to missing url
	// {
	// 	name: 'BlueSky',
	// 	icon: BlueSky,
	// 	url: ''
	// }
];
