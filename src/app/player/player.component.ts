import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  addPlayerForm: FormGroup;
  Player: any = {};

  addPlayer() {
    console.log(this.Player);
    let PlayereId = JSON.parse(localStorage.getItem('PlayereId') || '1');
    let Playeres = JSON.parse(localStorage.getItem('Playeres') || '[]');
    this.Player.id = PlayereId;
    Playeres.push(this.Player);
    localStorage.setItem('Players', JSON.stringify(Playeres));
    localStorage.setItem('PlayereId', JSON.stringify(PlayereId + 1));
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addPlayerForm = this.formBuilder.group({
      name: [''],
      lastName: [''],
      role: [''],
    });
  }
}
