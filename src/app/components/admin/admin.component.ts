import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  matches: any;
  Players: any;
  deleteMatches(id: string) {
    let pos;
    for (let index = 0; index < this.matches.length; index++) {
      if (this.matches[index].id == id) {
        pos = index;
      }
    }
    this.matches.splice(pos, 1);
    localStorage.setItem('matches', JSON.stringify(this.matches));
  }
  deletePlayers(id: string) {
    let pos;
    for (let index = 0; index < this.Players.length; index++) {
      if (this.Players[index].id == id) {
        pos = index;
      }
    }
    this.Players.splice(pos, 1);
    localStorage.setItem('Players', JSON.stringify(this.Players));
  }

  constructor() {}

  ngOnInit(): void {
    this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
    this.Players = JSON.parse(localStorage.getItem('Players') || '[]');
  }
}
