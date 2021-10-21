import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Observable, of, throwError } from 'rxjs';

import { Clan, WarClan } from '../data/models/clan';
import { Response } from '../data/models/response';
import { Member } from '../data/models/member';
import { ClanWar, WarLog } from '../data/models/war';
import { LeagueGroup } from '../data/models/league';

@Injectable({
  providedIn: 'root'
})
export class ClanInfoService {
	private baseURL = 'http://www.holycow2.com/onerouses/';
  //private baseURL = 'http://localhost/';

	constructor(private http: HttpClient) { }

	getClanInfo(): Observable<Clan> {
    return this.get(this.baseURL + 'claninfo.php')
      .pipe(map(response => response?.content as Clan));
	}

  getMemberInfo(playerTag: string): Observable<Member> {
    return this.get(this.baseURL + 'playerinfo.php', new HttpParams({ fromString: `player=${playerTag}`}))
      .pipe(map(response => response?.content as Member));
  }

  getCurrentWar(): Observable<ClanWar> {
    return this.get(this.baseURL + 'currentwar.php')
      .pipe(map(response => response?.content as ClanWar));
  }

  getWarLog(): Observable<WarLog> {
    return this.get(this.baseURL + 'warlog.php')
      .pipe(map(response => response?.content as WarLog));
  }

  getLeagueGroup(): Observable<LeagueGroup> {
    return this.get(this.baseURL + 'leaguegroup.php')
      .pipe(map(response => response?.content as LeagueGroup));
  }

  private get(url: string, params?: HttpParams): Observable<Response> {
    return this.http.get<Response>(url, {params: params}).pipe(catchError(this.onError));
  }

  private onError(err: any): Observable<any> {
    if (err.status === 200)
      return of(err.error.text);

    return throwError(err);
  }
}
