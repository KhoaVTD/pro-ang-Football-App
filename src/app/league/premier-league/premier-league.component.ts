import { Component, OnInit } from '@angular/core';
import { FootballDataService } from 'src/app/shared/service/football-data.service';
import { League } from '../../model/League';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.css']
})
export class PremierLeagueComponent implements OnInit {

  PremierLeague: League[];
  dataSource = new PremierLeagueDataSource(this.dataService);
  displayedColumns = [
    'position',
    'team_name',
    'match_played',
    'won',
    'drawn',
    'lost',
    'goal_for',
    'goal_against',
    'goal_difference',
    'points'
  ];


  constructor(private dataService: FootballDataService) { }

  ngOnInit() {
    this.getPremierLeague();
  }

  getPremierLeague(): void {
    this.dataService.getPremierLeague_Standing().subscribe(pl => this.PremierLeague = pl);
  }

}

export class PremierLeagueDataSource extends DataSource<any> {
  constructor(private dataService: FootballDataService) {
    super();
  }

  connect(): Observable<League[]> {
    return this.dataService.getPremierLeague_Standing();
  }

  disconnect() {}

}
