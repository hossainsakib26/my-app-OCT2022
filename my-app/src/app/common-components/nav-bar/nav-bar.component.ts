import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeNav(){
    // @ts-ignore
    document.getElementById("mySidenav").style.width = "0rem";
  }

  openNav(){
    // @ts-ignore
    document.getElementById("mySidenav").style.width = "16rem";
  }

}
