import { WarClan } from "./clan";

export type WarState = 'inWar' | 'notInWar';

export class WarTagList {
    warTags: string[];
}

export class WarLog {
    items: ClanWar[];
}

export class ClanWar {
    clan: WarClan;
    opponent: WarClan;
    teamSize: number;
    attacksPerMember: number;
    startTime: Date;
    endTime: Date;
    preparationStartTime: Date;
    state: WarState;
    result: string;
}

export class ClanWarAttack {
    order: number;
    attackerTag: string;
    defenderTag: string;
    stars: number;
    destructionPercentage: number;
    duration: number;
}