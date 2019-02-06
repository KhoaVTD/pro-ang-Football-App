import { Component, OnInit } from '@angular/core';
import { FootballDataService } from 'src/app/shared/service/football-data.service';
import { League } from '../../model/League';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-ligue-one',
  templateUrl: './ligue-one.component.html',
  styleUrls: ['./ligue-one.component.css']
})
export class LigueOneComponent implements OnInit {

  Ligue1: League[];
  dataSource = new Ligue1DataSource(this.dataService);
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
    this.getLigue1();
  }

  getLigue1(): void {
    this.dataService.getLigue1_Standing().subscribe(l => this.Ligue1 = l);
  }

}

export class Ligue1DataSource extends DataSource<any> {
  constructor(private dataService: FootballDataService) {
    super();
  }

  connect(): Observable<League[]> {
    return this.dataService.getLigue1_Standing();
  }

  disconnect() {}
}
