import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent implements OnInit {
  matches: any;
  constructor() {}

  ngOnInit(): void {
    this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
  }
}
