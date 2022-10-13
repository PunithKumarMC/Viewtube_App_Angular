import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showFiller = false;
  disable=true;  //button disabled
  opened=false;
  // toggle(){

  // }

}
