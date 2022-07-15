import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about(){
    window.scrollTo(500,500)
  }

  services(){
    
  }

  portfolio(){

  }
  contact(){

  }
}
