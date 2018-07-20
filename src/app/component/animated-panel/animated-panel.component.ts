import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animated-panel',
  templateUrl: './animated-panel.component.html',
  styleUrls: ['./animated-panel.component.scss']
})
export class AnimatedPanelComponent implements OnInit {
  @Input() title: string = "Test de ma nouvelle Card";
  @Input() loading : boolean = false;
  @Input() turn : boolean = false;
  @Input() turnOnClick : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public flip() {
    this.turn = !this.turn;
  }

  contentClicked() {
    if(this.turnOnClick) {$
      this.turn = !this.turn;
    }
  }
}
