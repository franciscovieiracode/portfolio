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
    document.getElementById('about')?.scrollIntoView()
  }

  portfolio(){
    document.getElementById('portfolio')?.scrollIntoView()
  }
  contact(){
    document.getElementById('contact')?.scrollIntoView()
  }
}
