import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit {

  @Input() headerLocation : string = '';

  constructor() { }

  reloadNavbar = false;
  
  ngOnInit() {
    console.log(this.headerLocation);
    this.reloadNavbar = true;
  }

}
