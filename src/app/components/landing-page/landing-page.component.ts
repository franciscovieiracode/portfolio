import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements  OnInit  {

  loaded:boolean = false

  constructor() { 
  }

  //delayed on purpose to show loading sceen
  ngOnInit(): void {
    setTimeout(() => {
      this.setState()
    }, 1500);
  }

  setState(){
    this.loaded = true
  }

  getState(){
    return this.loaded
  }

  topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
