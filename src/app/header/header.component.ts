import { Component, OnInit } from '@angular/core';
import { Clan } from '../data/models/clan';
import { ClanInfoService } from '../services/clan-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	clan: Clan;

  constructor(private clanService: ClanInfoService) { }

  ngOnInit(): void {
		this.clanService.getClanInfo()
      .subscribe(clan => {
        this.clan = clan;
      },
      err => {
        //handle errors somehow
        console.log(err);
      });
  }
}