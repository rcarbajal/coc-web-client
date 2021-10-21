import { Location } from './location';
import { ImageURLs } from './imageURLs';
import { ClanWarMember, Member } from './member';
import { Label } from './label';
import { League } from './league';

export class Clan {
	tag: string;
	name: string;
	type: string;
	description: string;
	location: Location;
	badgeUrls: ImageURLs;
	clanLevel: number;
	clanPoints: number;
	clanVersusPoints: number;
	requiredTrophies: number;
	warFrequency: string;
	warWinStreak: number;
	warWins: number;
	warTies: number;
	warLosses: number;
	warLeague: League;
	isWarLogPublic: boolean;
	members: number;
	memberList: Member[];
	labels: Label[];
	townHallLevel: number;
}

export class WarClan {
	destructionPercentage: number;
	tag: string;
	name: string;
	badgeUrls: ImageURLs;
	clanLevel: number;
	attacks: number;
	stars: number;
	expEarned: number;
	members: ClanWarMember;
}