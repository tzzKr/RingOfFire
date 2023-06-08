import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }

  startGame() {
    console.log("start game");
    this.router.navigate(['/game']);
  }


}
