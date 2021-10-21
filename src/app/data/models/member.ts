import { League } from './league';
import { Clan } from './clan';
import { Achievement } from './achievement';
import { Label } from './label';
import { Troop } from './troop';
import { Hero } from './hero';
import { Spell } from './spell';
import { ClanWarAttack } from './war';

export class Member {
	tag: string;
	name: string;
	role: string;
	townHallLevel: number;
	expLevel: number;
	trophies: number;
	bestTrophies: number;
	warStars: number;
	attackWins: number;
	defenseWins: number;
	builderHallLevel: number;
	versusTrophies: number;
	bestVersusTrophies: number;
	versusBattleWins: number;
	donations: number;
	donationsReceived: number;
	versusBattleWinCount: number;
	clanRank: number;
	previousClanRank: number;
	clan: Clan;
	league: League;
	achievements: Achievement[];
	labels: Label[];
	troops: Troop[];
	heroes: Hero[];
	spells: Spell[];

	static translateRole(role: string): string {
		let translatedRole: string = '';
		switch(role) {
			case "leader":
				translatedRole = "Leader";
				break;
			case "coLeader":
				translatedRole = "Co-Leader";
				break;
			case "admin":
				translatedRole = "Elder";
				break;
			default: 
				translatedRole = "Member";
				break;
		}

		return translatedRole;
	}
}

export class ClanWarMember {
	tag: string;
	name: string;
	mapPosition: number;
	townhallLevel: number;
	opponentAttacks: number;
	bestOpponentAttack: ClanWarAttack;
	attacks: ClanWarAttack[];
}