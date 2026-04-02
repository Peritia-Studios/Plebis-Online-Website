import { DateTime } from 'luxon';
import Discord from '$lib/components/icons/Discord.svelte';
import Instagram from '$lib/components/icons/Instagram.svelte';
import YouTube from '$lib/components/icons/YouTube.svelte';

export const steam_game_id = '3619920';
export const steam_store_page = 'https://store.steampowered.com/app/' + steam_game_id + '/';
export const steam_store_page_chaos = 'https://store.steampowered.com/app/1230410/Chaos/';
export const youtube_trailer_ID = false ? 'WtD2iNP__3k' : 'qx8hrhBZJ98';

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
	},
	{
		name: 'YouTube',
		icon: YouTube,
		url: 'https://www.youtube.com/channel/UCCzfsSfb46FMIUQN-8TWETA'
	}
	// Hidden due to missing url
	// {
	// 	name: 'BlueSky',
	// 	icon: BlueSky,
	// 	url: ''
	// }
];

export const socials_ole = "https://www.instagram.com/olumdergolum/";
export const socials_erik = "";
export const socials_nico = "https://www.instagram.com/nico.gbz_/";
export const socials_hanno = "";
export const socials_nils = "https://nwrenger.dev/";
