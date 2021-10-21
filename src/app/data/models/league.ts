import { Clan } from './clan';
import { ImageURLs } from './imageURLs';
import { WarState, WarTagList } from './war';

export class League {
	id: number;
	name: string;
	iconUrls: ImageURLs;
}

export class LeagueGroup {
    tag: string;
    state: WarState;
    season: string;
    clans: Clan[];
    rounds: WarTagList[];
}