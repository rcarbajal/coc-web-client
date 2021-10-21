import { Component, OnInit } from '@angular/core';
import { Clan } from '../data/models/clan';
import { LeagueGroup } from '../data/models/league';
import { Member } from '../data/models/member';
import { ClanWar } from '../data/models/war';
import { ClanInfoService } from '../services/clan-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly TOP_MEMBER_COUNT: number = 10;
	clan: Clan;
  topMembers: Member[] = [];
  currentWar: ClanWar;
  lastWar: ClanWar;
  leagueGroup: LeagueGroup;
  Member = Member;

  displayColumns: string[] = ['member_number', 'member_icon', 'member_exp', 'member_trophies'];

  constructor(private clanService: ClanInfoService) { }

  ngOnInit(): void {
		this.clanService.getClanInfo().subscribe(clan => {
      this.clan = clan;
      if(this.clan && this.clan.memberList && this.clan.memberList.length >= this.TOP_MEMBER_COUNT) {
        this.topMembers = this.clan.memberList.slice(0, this.TOP_MEMBER_COUNT);
      }
    },
    err => {
      //handle errors somehow
      console.log(err);
    });

    this.clanService.getCurrentWar().subscribe(war => {
      if(war) {
        this.currentWar = war;

        if(this.currentWar.state === 'notInWar')
          this.getLeagueInfo();
      }
      else {
        this.getLeagueInfo();
      }
    },
    err => {
      console.log(err);
    });
  }

  private getLeagueInfo(): void {
    this.clanService.getLeagueGroup().subscribe(league => {
      if(league) {
        this.leagueGroup = league;
        if(this.leagueGroup.state === 'notInWar')
          this.getLastWarInfo();
      }
    },
    err => {
      if (err.status && err.status == 503)
        this.getLastWarInfo();
      else
        console.log(err);
    });
  }

  private getLastWarInfo(): void {
    this.clanService.getWarLog().subscribe(log => {
      if(log) {
        this.lastWar = log.items[0];
      }
    },
    err => {
      console.log(err);
    });
  }
}
